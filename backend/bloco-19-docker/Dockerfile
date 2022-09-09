FROM node:alpine 
WORKDIR /usr/app 
COPY package*.json ./ 
RUN npm install
COPY . . 
EXPOSE 4000 
CMD npm start
LABEL maintener="Felipe Becker Nunes <nunesfb@gmail.com>"