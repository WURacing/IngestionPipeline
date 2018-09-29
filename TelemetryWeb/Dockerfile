# LTS image
FROM node:8-alpine

WORKDIR /

COPY package.json ./
# Like npm install but faster in docker
RUN npm config set registry http://registry.npmjs.org/ && npm install
COPY . .

RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]