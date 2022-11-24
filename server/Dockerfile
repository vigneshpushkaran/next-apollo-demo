FROM node:12.18.3

LABEL version="1.0"
LABEL description="PS - backend GraphQL app."
LABEL maintainer = ["vigneshpushkarandeveloper@gmail.com"]

WORKDIR /backend/app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["yarn", "start"]