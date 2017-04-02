const assert = require('assert');
const User = require('../src/user');

describe('Validating records', () => {
  it('requires a user name', () => {
    const user = new User({ name: undefined });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;

    assert(message === 'Name is required');
  });
  it('users name longer than 2 characters', () => {
    const user = new User({ name: 'AI' });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;

    assert(message === 'Name must be longer than 2 characters');
  });
  it('disallows invalid records be saved',(done) => {
    const user = new User({ name: 'AI' });
    user.save()
      .catch((validationResult) => {
        const { message } = validationResult.errors.name;
        assert(message === 'Name must be longer than 2 characters');
        done();
      });
  });
});
