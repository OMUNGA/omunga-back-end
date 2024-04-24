# Build stage for development
FROM node:20-alpine AS development

# Create app directory
WORKDIR /usr/src/app

# Copy all files
COPY . .

# Install dependencies
RUN yarn install  

# Bundle app source
COPY --chown=node:node . .

# Set user
USER node

# Build stage for production
FROM development AS build

# Run the build command which creates the production bundle
RUN yarn run build

# Install production dependencies
RUN yarn install --production



# Copy Prisma schema
COPY prisma/schema.prisma ./prisma/

# Wait for the database to become available
RUN apk add --no-cache postgresql-client
RUN wget -q -O /usr/local/bin/wait-for-db.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && \
    chmod +x /usr/local/bin/wait-for-db.sh

# Command to run Prisma commands after database is ready
# CMD ["sh", "-c", "wait-for-db.sh postgres:5432 -- yarn prisma generate && yarn prisma db push"]
# Command to run Prisma commands after database is ready
CMD sh -c "wait-for-db.sh postgres:5432 -- yarn prisma generate && yarn prisma db push"


# Switch back to node user
USER node

# Final stage for production
FROM node:20-alpine AS production

# Set the working directory
WORKDIR /usr/src/app

# Copy production artifacts
COPY --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=build /usr/src/app/dist /usr/src/app/dist

# Expose port
EXPOSE 8000

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
