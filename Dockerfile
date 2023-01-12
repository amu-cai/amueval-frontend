# pull official base image
FROM node:lts

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install -g serve --save
RUN npm audit fix

# add app
COPY . /app/

# start app
CMD ["npm", "start"]
