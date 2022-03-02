FROM node:lts-alpine3.15 as builder
WORKDIR /usr/app
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn install
COPY . .
RUN yarn run build:prod

FROM nginx:1.21.6-alpine
EXPOSE 4000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/dist /usr/share/nginx/html


