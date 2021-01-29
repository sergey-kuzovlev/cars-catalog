## Description

Test Node+Nest React+redux Mongoose application

## Installation

```bash
$ npm install
```

## Running the app


```bash
# start docker nginx to host static
docker build -t cars-catalog . && docker run -p 80:80 -p 443:443 -v [pwd]:/www/ --name cars-catalog 1.0.0

# build:server
$ npm run build:server

# build:client
$ npm run build:client

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```