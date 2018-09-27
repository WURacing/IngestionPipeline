# LTS image
FROM node:8-alpine

# Create app directory
WORKDIR .

# Install app dependencies
COPY package.json ./
RUN npm install

# Bundle app source
COPY . .

# Run
EXPOSE 400
# RUN npm run build
CMD [ "npm", "start" ]