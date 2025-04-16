import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ProducerModule } from 'src/modules/producer/producer.module';
import { ProducerRepository } from 'src/modules/producer/repository/producer.repository';
import * as request from 'supertest';
import { AppModule } from '../src/modules/app.module';
import { ProducerInMemoryRepository } from '../src/modules/producer/repository/producer.inmemory';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let producerInMemory = new ProducerInMemoryRepository();
  const producer = {
    doc_number: '94309220096',
    name: 'John',
    id: '63a3b510-9dd0-4431-84b8-88c5a742ddb2',
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, ProducerModule],
    })
      .overrideProvider(ProducerRepository)
      .useValue(producerInMemory)
      .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    app.close();
  });

  it('/ (POST) producer', () => {
    return request(app.getHttpServer())
      .post('/producer')
      .send({ ...producer, doc_number: '943.092.200-96' })
      .expect(201, producer);
  });

  it('/ (POST) producer CPF invalido', () => {
    return request(app.getHttpServer())
      .post('/producer')
      .send({ ...producer, doc_number: '111.222.333-44' })
      .expect(400, {
        message: ['CPF inválido'],
        error: 'Bad Request',
        statusCode: 400,
      });
  });

  it('/ (POST) producer CNPJ invalido', () => {
    return request(app.getHttpServer())
      .post('/producer')
      .send({ ...producer, doc_number: '33.777.441/0001-11' })
      .expect(400, {
        message: ['CNPJ inválido'],
        error: 'Bad Request',
        statusCode: 400,
      });
  });

  it('/ (GET) all producer', () => {
    return request(app.getHttpServer())
      .get('/producer')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual([producer]);
      });
  });

  it('/:id (GET) producer by Id', () => {
    return request(app.getHttpServer())
      .get('/producer/' + producer.id)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(producer);
      });
  });

  it('/:id (PATCH) producer by Id', () => {
    return request(app.getHttpServer())
      .patch('/producer/' + producer.id)
      .send({ ...producer, name: 'jack' })
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          message: 'Produtor alterado com sucesso!',
        });
      });
  });
});
