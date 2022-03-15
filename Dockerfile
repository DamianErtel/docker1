FROM node:16
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
ENV PORT 3002
EXPOSE $PORT
CMD ["npm", "run", "dev"]
