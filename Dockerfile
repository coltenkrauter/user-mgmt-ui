# Stage 1 - Build the app
FROM node:15 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
COPY ./nginx.conf /
RUN npm run build

# Stage 2 - Serve the app
FROM nginx:1
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf