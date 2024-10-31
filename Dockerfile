FROM node:latest AS first

WORKDIR /Pilot

COPY . .

RUN npm install

RUN npm run build


FROM nginx:latest

COPY --from=first /Pilot/dist/pilot /usr/share/nginx/html

EXPOSE 80