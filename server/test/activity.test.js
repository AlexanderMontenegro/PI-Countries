const { Activity, conn } = require('../src/db');

describe('Activity model', () => {
  beforeAll((done) => {
    conn.authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
        done();
      })
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
        done(err);
      });
  });

  describe('Validators', () => {
    beforeEach(() => Activity.sync({ force: true }));

    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Activity.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });

      it('should work when its a valid name', async () => {
        await expect(Activity.create({ 
          name: 'Hiking', 
          difficulty: '3', 
          duration: '5', 
          season: 'Verano'
        })).resolves.toBeDefined();
      });
    });
  });
});
