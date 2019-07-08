const Person = require('../categories/person.js');

describe('Person Model', () => {

  let person;
  
  beforeEach(() => {
    person = new Person();
  });

  it('Sanitize() returns undefined with missing requirements', () => {
    const schema = person.schema;
    var testRecord = {};
    for (var field in schema) {
      if (schema[field].required) {
        testRecord[field] = null;
      }
    }
    expect(person.sanitize(testRecord)).toBeUndefined();
  });

  it('Saves an entry as a person to the person.db file', () => {
    let j$ = {
      name: 'Jonny-G',
      occupation: 'Leave Specialist',
      age: 25,
      married: true,
    }
    person.create(j$)
    .then(response => {
      console.log(response)
    })
    .catch(e => console.error)
  })
});