FROM node:12.18.3

LABEL version="1.0"
LABEL description="PS - frontend react app."
LABEL maintainer = ["vigneshpushkarandeveloper@gmail.com"]

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

RUN npx next telemetry disable

COPY . .

EXPOSE 3000

RUN yarn build

CMD ["yarn","start"]