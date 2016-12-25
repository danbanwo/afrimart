const express = require('express');
const app = express();
const path = require('path');
const rootPath = path.join(__dirname, '/..');
const db = require('./models');
const bodyParser = require('body-parser');
const routes = require('./routes');
const debug = require('DEBUG')('RED');

app.use(express.static(path.join(rootPath, '/front')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(routes.productApi);
app.use(routes.customerApi);
app.use(routes.userApi);


app.get('/*', (req, res) => {
  res.send(path.join(rootPath, '/front/index.html'))
})

db.sequelize.sync()
.then(() => {
  app.listen(3000, () => {
    console.log('Server running on PORT 3000', routes.customerApi)
  })
})
