const customerApi = require('express').Router();
const Customer = require('../models').Customer;

const getAllCustomers = (req, res) => {
  Customer.findAll()
  .then((customers) => {
    res.send(customers)
  })
}

const createCustomer = (req, res) => {
  let data = req.body
  console.log(data)
  Customer.create({
    first_name: data.first,
    last_name: data.last,
    address: data.address,
    city: data.city,
    state: data.state,
    zipcode: data.zip,
    phone: data.phone,
    email: data.email
  })
  .then((customer) => {
    res.send('Customer has been successfully created')
  })
}

customerApi.route('/api/customer')
.get(getAllCustomers)
.post(createCustomer)

module.exports = customerApi;
