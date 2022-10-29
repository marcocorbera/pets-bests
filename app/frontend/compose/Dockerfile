FROM node:16-alpine

RUN apk update && apk upgrade

# create destination directory
RUN mkdir -p /code/
WORKDIR /code

# copy package.json and install required packages
COPY ./package*.json ./
RUN yarn install

# copy code
COPY ./ /code/
