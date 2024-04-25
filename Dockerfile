###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:20-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 


###################
# BUILD FOR PRODUCTION
###################

FROM node:20-alpine As build

WORKDIR /usr/src/app
COPY package*.json ./

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate


COPY  --from=development /usr/src/app/node_modules ./node_modules

COPY . . 

RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node

###################
# PRODUCTION
###################

FROM node:20-alpine As production

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY  --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/prisma ./prisma

RUN npx prisma generate

EXPOSE 8000

CMD ["npm", "run", "start:prod"]



