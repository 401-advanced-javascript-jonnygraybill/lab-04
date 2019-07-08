'use strict';

const DataModel = require('../memory.js');

class Products extends DataModel {
  constructor() {
    super();
    this.schema = {
      product_id: { required: true },
      price: { type: 'integer', required: true },
      weight: { type: 'integer', required: false },
      quantity_in_stock: { type: 'integer', required: false},
    };
  }
}

module.exports = Products;