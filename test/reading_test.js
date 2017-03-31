const assert = require('assert');
const User = require('../src/user');

describe('Reading users from database', () => {
  let joe;
  beforeEach(() => {
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => done());
  });
  it('finds all users with a name of joe', () => {
    
  });
});
