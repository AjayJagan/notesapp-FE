FROM node:lts-alpine3.15 as builder
WORKDIR /usr/app
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn install
COPY . .
RUN yarn run build:prod

FROM nginx:1.21.6-alpine
COPY --from=builder /usr/app/dist /usr/share/nginx/html
EXPOSE 80

