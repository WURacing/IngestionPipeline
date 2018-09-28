# LTS image
FROM node:8-alpine

WORKDIR /FishWeb

COPY package.json ./
# Like npm install but faster in docker
RUN npm config set registry http://registry.npmjs.org/ && npm install
COPY . .
RUN ls
RUN npm run build
EXPOSE 1500
CMD [ "npm", "start" ]