FROM node:14 as builder
WORKDIR /app/
COPY . .
RUN ls && npm i && npm run build
RUN ls /app/dist

FROM node:14
WORKDIR /app/
COPY --from=builder /app/ ./
EXPOSE 3000
EXPOSE 5432
CMD ["npm", "run", "start:prod"]