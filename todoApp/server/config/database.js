const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const DBURL = 'mongodb://localhost/todo';
module.exports = mongoose.connect(DBURL, { useNewUrlParser: true }, { useUnifiedTopology: true });
