###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:20-alpine AS development

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
COPY prisma/schema.prisma ./prisma/
COPY --chown=node:node . .

RUN yarn install

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM development AS build

WORKDIR /usr/src/app

RUN yarn build

RUN rm -rf node_modules
RUN yarn install --production

USER node

###################
# PRODUCTION
###################

FROM node:20-alpine AS production

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/prisma ./prisma

EXPOSE 8000

CMD ["yarn", "start:prod"]
