import express, { Response, Request, NextFunction } from 'express'
import cors from 'cors'
import 'express-async-errors';
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import session from 'express-session'


class Middleware {
    public security(app: express.Application): void {
        const corsOptions = {
            origin: process.env.ORIGIN_HOST,
            methods: process.env.METHODS,
            allowedHeaders: 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Strict-Transport-Security,Content-Security-Policy,XSRF-TOKEN,X-XSRF-TOKEN,X-Frame-Options,X-Content-Type-Options,X-XSS-Protection,Expect-CT,feature-policy,Cache-Control,Pragma,Allow,Set-Cookie,Cookie,Authorization',
            exposedHeaders: 'Content-Length,Content-Range,Strict-Transport-Security,Content-Security-Policy,XSRF-TOKEN,X-XSRF-TOKEN,X-Frame-Options,X-Content-Type-Options,X-XSS-Protection,Expect-CT,feature-policy,Cache-Control,Pragma,Allow,Set-Cookie,Cookie,Authorization',
            maxAge: 86400,
            credentials: true
        }
        // Configure our app
        app.use(cors(corsOptions))

        // -- Configure Helmet
        // Strict-Transport-Security
        app.use(
            helmet.hsts({
                maxAge: 63072000,
                preload: true
            })
        )
        // Content-Security-Policy
        app.use(
            helmet.contentSecurityPolicy({
                directives: {
                    'default-src': ['https:', 'data:', 'blob:', "'self'"],
                    'img-src': ['data:', 'blob:', "'self'"],
                    'media-src': ["'self'"],
                    'script-src': ["'self'"],
                    'frame-ancestors': ['https://www.gstatic.com/recaptcha', 'https://www.google.com/recaptcha/'],
                    'connect-src': ['https:', 'wss:'],
                    'upgrade-insecure-requests': []
                }
            })
        )
        // Sets "X-Frame-Options: SAMEORIGIN"
        app.use(
            helmet.frameguard({
                action: 'sameorigin'
            })
        )

        // Sets "X-Content-Type-Options: nosniff"
        app.use(helmet.noSniff())

        // Expect-CT "enforce, max-age=7776000, report-uri=\"https://$http_host/\"";

        app.use(
            helmet.expectCt({
                maxAge: 7776000,
                enforce: true,
                reportUri: 'http://localhost:50000/api/report' // VERIFICAR URI
            })
        )

        // X-DNS-Prefetch-Control: "off";
        app.use(
            helmet.dnsPrefetchControl({
                allow: false
            })
        )

        // Referrer-Policy "same-origin";
        app.use(
            helmet.referrerPolicy({
                policy: 'same-origin'
            })
        )

        // -x FIM HELMET x-

        // app.use(require('pino-http')());
        app.use(cookieParser())
        // CSRF - csurf -- USO GLOBAL
        // app.use(csurf({ cookie: true }))
        app.use(express.urlencoded({ limit: '25mb', extended: false }))
        app.use(express.json({ limit: '25mb' }))

        // X-XSS-Protection "1; mode=block";
        // feature-policy "accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none'";
        // Cache-Control "no-cache, no-store, must-revalidate";
        // Pragma "no-cache";
        app.use((req, res, next) => {
            res.setHeader('X-XSS-Protection', '1; mode=block')
            res.setHeader('feature-policy', "accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none'")
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
            res.setHeader('Pragma', 'no-cache')

            // console.log(req.csrfToken());
            // res.cookie('XSRF-TOKEN', req.csrfToken());
            // res.locals._csrf = req.csrfToken();
            next()
        })
    }

    public session(app: express.Application): void {
        app.use(session({
            secret: process.env.SESSION_SECRET || '',
            rolling: true,
            resave: false,
            saveUninitialized: true,
            cookie: {
                maxAge: 3600000,
                httpOnly: true,
                secure: false // turn to true on production once https is in place
            }
        }))

        app.use((err, req: Request, res: Response, next: NextFunction) => {
            if (err) { console.log('ERROR MIDDLEWARE', err) }

            switch (err.name) {
                case 'UnauthorizedError':
                    res.status(401).json({ code: 401, message: err.inner })
                    break
                case 'JsonWebTokenError':
                    res.status(401).json({ code: 401, message: err.inner })
                    break

                default:
                    next()
                    break
            }

            if (err.code === 'EBADCSRFTOKEN') { return res.status(403).json({ code: 403, message: err }) }

            next()
        })
    }

    public timeResponse(app: express.Application): void {
        app.use((req, res, next) => {
            const startHrTime = process.hrtime()

            res.on('finish', () => {
                const elapsedHrTime = process.hrtime(startHrTime)
                const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6
            })

            next()
        })
    }


}

export default new Middleware()