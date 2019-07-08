const Products = require('../categories/products.js');

describe('Products Model', () => {

  let products;

  beforeEach(() => {
    products = new Products();
  })

  // How might we repeat this to check on types?
  it('sanitize() returns undefined with missing requirements', () => {
    const schema = products.schema;
    var testRecord = {};
    for (var field in schema) {
      if (schema[field].required) {
        testRecord[field] = null;
      }
    }
    expect(products.sanitize(testRecord)).toBeUndefined();
  });

  it('can post() a new category', () => {
    let obj = { name: 'Test Category' };
    return products.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        })
      })
      .catch(e => console.error);
  });

  it('can get() a product', () => {
    let obj = { name: 'Test Product' };
    products.create(obj)
      .then(record => {
        products.get(record._id)
          .then(products => {
            Object.keys(obj).forEach(key => {
              expect(products[0][key]).toEqual(obj[key]);
            });
          });
      })
      .catch(err => console.log(error));
  });

  it('can update() a product', () => {
    let obj = { name: 'Test Product' };
    return products.create(obj)
    .then(record => {
      products.update(record.id, { name: 'Test Product'})
      .then(products => {
        products.get(record.id)
        .then(banana => {
          expect(banana.name).toEqual('Test Product');
        })
        .catch(err => console.error);
      });
    })
    .catch(err => console.error);
  })

  it('can delete() a Product', () => {
    let obj = { name: 'Test Product' };
    products.create(obj)
    .then(record => {
      return products.delete(record.id)
      .then(products => {
        expect(products.get(record.id).name).toBeFalsy();
      });
    })
    .catch(err => console.error);
  });
});