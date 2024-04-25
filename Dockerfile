###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:20-alpine AS development

WORKDIR /usr/src/app

COPY --chown=node:node package.json ./
COPY prisma/schema.prisma ./prisma/
COPY .. .

RUN yarn install
RUN yarn global add prisma
RUN npx prisma migrate dev --name omunga init -Y
RUN npx prisma generate
RUN npx prisma db push

USER node


###################
# BUILD FOR PRODUCTION
###################

FROM node:20-alpine AS build

WORKDIR /usr/src/app

COPY --chown=node:node package.json ./
COPY --chown=node:node yarn.lock ./
COPY --chown=node:node tsconfig.json ./
COPY --chown=node:node prisma ./prisma/  
COPY --chown=node:node . .

RUN yarn install
RUN yarn build

ENV NODE_ENV production

USER node

###################
# PRODUCTION
###################

FROM node:20-alpine AS production

WORKDIR /usr/src/app

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/prisma ./prisma
COPY --chown=node:node --from=build /usr/src/app/package.json ./
COPY --chown=node:node --from=build /usr/src/app/tsconfig.json ./

# Wait for the database to become available
RUN apk add --no-cache postgresql-client
RUN wget -q -O /usr/local/bin/wait-for-db.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && \
    chmod +x /usr/local/bin/wait-for-db.sh

EXPOSE 8000
CMD ["sh", "-c", "wait-for-db.sh postgres:5432 -- node dist/main.js"]
