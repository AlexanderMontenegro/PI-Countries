const request = require('supertest');
const server = require('../src/server');
const { conn, Country} = require('../src/db');

beforeAll(async () => {
  try {
    await conn.sync({ force: true });
    await Country.bulkCreate([
      {
        id: 'ARG',
        name: 'Argentina',
        flag_img: 'argentina-flag.png',
        continent: 'South America',
        capital: 'Buenos Aires',
        subregion: 'Southern Cone',
        area: 2780400,
        population: 45000000,
      },
      {
        id: 'BRA',
        name: 'Brazil',
        flag_img: 'brazil-flag.png',
        continent: 'South America',
        capital: 'Brasilia',
        subregion: 'Latin America',
        area: 8515767,
        population: 210000000,
      },
    ]);
  } catch (error) {
    console.error('Error al configurar los datos de prueba:', error);
  }
});

afterAll(async () => {
  await conn.close();
});

describe('Country Routes', () => {
  it('debería llegar a todos los países', async () => {
    const response = await request(server).get('/countries');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  });

  it('debería obtener un país por identificación', async () => {
    const response = await request(server).get('/countries/ARG');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Argentina');
  });

  it('debería devolver 404 si no se encuentra el país', async () => {
    const response = await request(server).get('/countries/XYZ');
    expect(response.status).toBe(404);
  });

  it('debería buscar países por nombre', async () => {
    const response = await request(server).get('/countries?name=Argentina');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0].name).toBe('Argentina');
  });
});

