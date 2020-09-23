'use strict';

const mongoose = require('mongoose');

const Users = mongoose.Schema({
  username : {type: String, required: true},
  password: {type: String, required: true},
});

module.exports = mongoose.model('Users', Users);
// mongo shell CLI : categoriess collection
