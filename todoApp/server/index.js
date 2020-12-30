const app = require('./config/server');
require('./config/database');

require('./src/routes/todoRouter')(app);
