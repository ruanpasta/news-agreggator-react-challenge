FROM node:18

WORKDIR /app

COPY package*.json ./

# Is necessary to run two times due to this issue https://github.com/npm/cli/issues/4828
RUN npm install
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
