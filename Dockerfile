###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:20-alpine AS development

WORKDIR /usr/src/app

COPY --chown=node:node package.json ./
COPY prisma/schema.prisma ./prisma/
COPY --chown=node:node . .

RUN yarn install


USER node


###################
# BUILD FOR PRODUCTION
###################

FROM node:20-alpine AS build

WORKDIR /usr/src/app

COPY --chown=node:node package.json ./
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node yarn.lock ./
COPY --chown=node:node tsconfig.json ./
COPY --chown=node:node prisma ./prisma/  
COPY --chown=node:node . .

RUN yarn install
RUN yarn global add prisma
RUN npx prisma generate
RUN npx prisma db push
RUN yarn build

RUN npm ci --only=production && npm cache clean --force

USER node


###################
# PRODUCTION
###################

FROM node:20-alpine AS production

WORKDIR /usr/src/app

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/prisma ./prisma


EXPOSE 8000
CMD ["node dist/main.js"]
