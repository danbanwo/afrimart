var productApi = require('./product-api');
var customerApi = require('./customer-api');
var userApi = require('./user-api');
const debug = require('DEBUG')('RED');


module.exports = {
  productApi: productApi,
  customerApi: customerApi,
  userApi: userApi
}
