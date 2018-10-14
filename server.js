const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const users = require('./routes/api/users');
const Item = require('./models/Item');
const User = require('./models/User');
const app = express();
// bodyPareser middleware
app.use(bodyParser.json());
// DB config
const db = require('./config/keys').mongourl;

//connect  to mongodb
mongoose.connect(db)
  .then(() => console.log('mongodb connected...'))
  .catch(err => console.log(err));

app.use('/api/items', items);

app.use('/api/users', users);



  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log('server started port : ' +port))
