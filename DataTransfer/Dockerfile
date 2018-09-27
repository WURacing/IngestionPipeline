# LTS image
FROM node:8-alpine

# Create app directory
WORKDIR .

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Run
EXPOSE 2020
# RUN npm run build
CMD [ "npm", "start" ]