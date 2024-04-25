FROM node:18.17.0-alpine3.18 as development

WORKDIR /src/app

COPY package.json package.json
COPY tsconfig.json ./
COPY yarn.lock yarn.lock
COPY prisma/schema.prisma ./prisma/

RUN yarn install

RUN npx prisma generate
# RUN npx prisma migrate dev --name luvulu-db  init -Y
# RUN npx prisma migrate deploy
# RUN npx prisma migrate deploy
COPY .. .

RUN yarn run build


FROM node:18.17.0-alpine3.18 as production
COPY --from=development /app/node_modules ./node_modules
COPY --from=development /app/package.json ./
COPY --from=development /app/tsconfig.json ./
COPY --from=development /app/yarn.lock ./
COPY --from=development /app/dist ./dist

EXPOSE 8000

CMD ["npm", "run", "start:prod"]

#docker build -t borda-backend .