## nestjs course demo

## nestjs structure

- pipe:validate data contained in the requrest
- guard: make sure the user is authenticated
- controller: route the request to a particular function
- service: business logic
- repository: access database
- modules: group together code
- filters: handles errors that occur during requrest handling
- interceptors: add extra logic to incoming requrests or outgoing response

## validator && transformer

- class-validator: validate req body whether it is matched with designated type
- class-transformer: convert json into class

## Installation

```bash
$ npm install
```

## Running the app

```bash
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

## License

Nest is [MIT licensed](LICENSE).
