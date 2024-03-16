FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
#RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/dist/proyecto-final-angular/browser/ /usr/share/nginx/html
EXPOSE 80
EXPOSE 443