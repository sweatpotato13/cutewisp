FROM node:latest

LABEL maintainer="sweatpotato13@gmail.com"

WORKDIR /usr/src/app

VOLUME [ "/usr/src/app" ]

EXPOSE 3000

CMD [ "yarn", "start" ]
