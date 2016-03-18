/* global require describe it */

const fs = require('fs');
const assert = require('assert');
const pgp = require('pg-promise')(/*options*/);
const cn = {
  user: 'nobody',
  host: '/var/run/postgresql',
};

describe('rows', () => {
  it('should be updated', (done) => {
    const db = pgp(cn);
    const solution = fs.readFileSync('./solution.sql', 'utf8');

    const actualQuery = db.query(solution);
    const expectedQuery = db.query('select solution() AS name;');

    Promise.all([expectedQuery, actualQuery]).then(([expected, actual]) => {
      assert.equal(JSON.stringify(expected), JSON.stringify(actual));
    }).then(done, done);
  });
});

