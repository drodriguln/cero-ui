FROM node:alpine AS builder
WORKDIR /home/cero-ui
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
WORKDIR /etc/nginx/html
RUN rm -rf ./*
COPY --from=builder /home/cero-ui/dist .
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
ENTRYPOINT ["nginx", "-g", "daemon off;"]
