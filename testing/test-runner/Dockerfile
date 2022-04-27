FROM node:14-alpine
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm install
COPY ./entrypoint.sh .
ENTRYPOINT [ "/app/entrypoint.sh" ]
