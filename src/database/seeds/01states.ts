import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateStates implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('states')
      .values([
        {
          id: 1,
          name: 'Acre',
          UF: 'AC',
        },
        {
          id: 2,
          name: 'Alagoas',
          UF: 'AL',
        },
        {
          id: 3,
          name: 'Amazonas',
          UF: 'AM',
        },
        {
          id: 4,
          name: 'Amapá',
          UF: 'AP',
        },
        {
          id: 5,
          name: 'Bahia',
          UF: 'BA',
        },
        {
          id: 6,
          name: 'Ceará',
          UF: 'CE',
        },
        {
          id: 7,
          name: 'Distrito Federal',
          UF: 'DF',
        },
        {
          id: 8,
          name: 'Espírito Santo',
          UF: 'ES',
        },
        {
          id: 9,
          name: 'Goiás',
          UF: 'GO',
        },
        {
          id: 10,
          name: 'Maranhão',
          UF: 'MA',
        },
        {
          id: 11,
          name: 'Minas Gerais',
          UF: 'MG',
        },
        {
          id: 12,
          name: 'Mato Grosso do Sul',
          UF: 'MS',
        },
        {
          id: 13,
          name: 'Mato Grosso',
          UF: 'MT',
        },
        {
          id: 14,
          name: 'Pará',
          UF: 'PA',
        },
        {
          id: 15,
          name: 'Paraíba',
          UF: 'PB',
        },
        {
          id: 16,
          name: 'Pernambuco',
          UF: 'PE',
        },
        {
          id: 17,
          name: 'Piauí',
          UF: 'PI',
        },
        {
          id: 18,
          name: 'Paraná',
          UF: 'PR',
        },
        {
          id: 19,
          name: 'Rio de Janeiro',
          UF: 'RJ',
        },
        {
          id: 20,
          name: 'Rio Grande do Norte',
          UF: 'RN',
        },
        {
          id: 21,
          name: 'Rondônia',
          UF: 'RO',
        },
        {
          id: 22,
          name: 'Roraima',
          UF: 'RR',
        },
        {
          id: 23,
          name: 'Rio Grande do Sul',
          UF: 'RS',
        },
        {
          id: 24,
          name: 'Santa Catarina',
          UF: 'SC',
        },
        {
          id: 25,
          name: 'Sergipe',
          UF: 'SE',
        },
        {
          id: 26,
          name: 'São Paulo',
          UF: 'SP',
        },
        {
          id: 27,
          name: 'Tocantins',
          UF: 'TO',
        },
      ])
      .execute();
  }
}
