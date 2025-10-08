FROM node:20-alpine AS BUILDER

WORKDIR /TODO-APP

COPY package*.json ./

RUN npm install

COPY . .

FROM node:20-alpine AS final

WORKDIR /TODO-APP

COPY --from=BUILDER /TODO-APP/package*.json ./
COPY --from=BUILDER /TODO-APP/node_modules ./node_modules
COPY --from=BUILDER /TODO-APP  .

EXPOSE 8000

ENTRYPOINT ["node", "index.js"]

