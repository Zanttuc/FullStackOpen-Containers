FROM node:24
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci 

ENV DEBUG=test:*
  
USER node

CMD ["npm", "start"]
