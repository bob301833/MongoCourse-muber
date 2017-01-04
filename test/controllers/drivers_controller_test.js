import assert from 'assert';
import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../app';

const Driver = mongoose.model('driver');

describe('Drivers controller', () => {
  it('Post to /api/drivers creates a new drivers', (done) => {
    Driver.count().then(count => {
      request(app)
        .post('/api/drivers')
        .send({ email: 'test@test.com' })
        .end(() => {
          Driver.count().then(newCount => {
            assert(count + 1 === newCount);
            done();
          });
      });
    });
  });

  it('PUT to /api/drivers/id edits an existing driver', () => {
    const driver = new Driver({
      email: 't@t.com',
      driving: false
    });
    driver.save()
      .then(() => {
        request(app)
          .put(`/api/dirvers/${driver._id}`)
          .send({ driving: true })
          .end(() => {
            Driver.findOne({ email: 't@t.com' })
              .then((driver) => {
                assert(driver.driving === true);
                done();
              });
          });
      });
  });
});
