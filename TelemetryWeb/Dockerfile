# LTS image
FROM node:8-alpine

RUN npm install webpack -g

# Create app directory
WORKDIR /

# Install app dependencies
COPY package.json .
COPY tsconfig.json .
COPY webpack.config.js .
RUN npm install

# Bundle app source
#COPY /build ./build
COPY src/ /src/
RUN ls /
# Run
EXPOSE 3000
EXPOSE 8080
# RUN npm run build
CMD [ "npm", "start" ]