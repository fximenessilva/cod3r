const port = process.env.PORT || 3020;
const bodyParser = require('body-parser');
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('tiny'));

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
