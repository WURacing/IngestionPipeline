# LTS image
FROM node:8-alpine

# Create app directory
WORKDIR /
# Install app dependencies
COPY package.json ./
RUN npm config set registry http://registry.npmjs.org/ && npm install
COPY . .

RUN npm run build

# Run
EXPOSE 2020
# RUN npm run build
CMD [ "npm", "start" ]