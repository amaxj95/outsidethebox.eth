# Build stage
FROM node:14 as build-stage
WORKDIR /outside-the-box.eth
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve stage
FROM nginx:stable-alpine as serve-stage
COPY --from=build-stage /outside-the-box.eth/build /usr/share/nginx/html
EXPOSE 5432 80
CMD ["nginx", "-g", "daemon off;"]
