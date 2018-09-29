# LTS image
FROM node:8-alpine

# Create app directory
#WORKDIR /DataTransfer
WORKDIR /
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package.json ./
RUN npm config set registry http://registry.npmjs.org/ && npm install
COPY . .

#RUN npm run build

# Run
EXPOSE 2020
# RUN npm run build
CMD [ "npm", "start" ]