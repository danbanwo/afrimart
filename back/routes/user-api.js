const userApi = require('express').Router();
const User = require('../models').User;

const getUser = (req, res) => {
  let id = req.params.id
  User.findById(id)
  .then((user) => {
    res.send(user)
  })
}

const createUser = (req, res) => {
  let data = req.body
  User.create({
    username: data.username,
    password: data.password
  })
  .then((user) => {
    res.send(user)
  })
}

userApi.route('/api/user/:id')
.get(getUser)

userApi.route('/api/user')
.post(createUser)

module.exports = userApi;
