# RODANDO COM DOCKER

ao baixar o projeto e ter instalado o docker em sua maquina seguem os passos

subir o container

```bash
 docker-compose up --build -d
```

so subir precisamos rodar as migrations(criar as tabelas do sistema)

# EXECUTANDO SEM DOCKER

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run dev

# production mode
$ npm run prod

# criar migration
$ npm run migration:create -name=user
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
