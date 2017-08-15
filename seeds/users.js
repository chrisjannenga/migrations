exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'Chris',
          password: 'billy',
          email: 'fake@fake.net',
          age: '23'
        },
        {
          username: 'Krystine',
          password: 'bobby',
          email: 'fake1@fake.net',
          age: '21'
        },
        {
          username: 'Batman',
          password: 'testpassword',
          email: 'fake2@fake.net',
          age: '2'
        },
        {
          username: 'Robin',
          password: 'testingStuff',
          email: 'fake3@fake.net',
          age: '29'
        },
        {
          username: 'Sage',
          password: '12jUndj',
          email: 'fake@fake4.net',
          age: '0'
        }
      ]);
    });
};
