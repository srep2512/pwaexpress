FROM node:8

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . /app

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

EXPOSE 5000
CMD [ "node", "index.js" ]
