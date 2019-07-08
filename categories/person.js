'use strict';

const DataModel = require('../file.js');

class Person extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: {required: true},
      name: { type: 'string', required: true },
      occupation: { type: 'string', required: true, },
      age: { type: 'integer', required: false, },
      married: { required: false, type: 'boolean' }
    };
  }
}

module.exports = Person;