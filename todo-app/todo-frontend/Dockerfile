FROM node:24 AS test-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm test

FROM test-stage AS build-stage

# Allow overriding the backend URL at build time; default to /api so the
# built frontend will call the reverse proxy path.
ARG VITE_BACKEND_URL=/api
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}

RUN npm run build

FROM nginx:1.29-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html