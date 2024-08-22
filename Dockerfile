# Estágio de desenvolvimento
FROM node:20-alpine AS development

WORKDIR /src/app

COPY package.json yarn.lock ./
COPY tsconfig.json ./
COPY prisma/schema.prisma ./prisma/

RUN yarn install

COPY . .

RUN yarn run build

# Estágio de produção
FROM node:20-alpine AS production

WORKDIR /usr/src/app

# Copia apenas o que é necessário para o ambiente de produção
COPY --from=development /src/app/package.json ./
COPY --from=development /src/app/yarn.lock ./
COPY --from=development /src/app/tsconfig.json ./
COPY --from=development /src/app/prisma ./prisma/
COPY --from=development /src/app/dist ./dist

ENV DATABASE_URL="postgresql://omunga:Q_cP0ombwGt16f2lafvrkg@omunga-15834.7tt.aws-us-east-1.cockroachlabs.cloud:26257/omunga_database?sslmode=verify-full"

# Instala apenas dependências de produção
RUN yarn install --production

# Gera o Prisma Client e aplica migrações
RUN npx prisma generate
RUN npx prisma migrate deploy

EXPOSE 8000

CMD ["npm", "run", "start:prod"]
