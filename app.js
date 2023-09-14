require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const models = require('./src/models/index');

const routes = require('./src/routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.use(cors());

app.use('/session', routes.session);

app.use('/users', routes.user);

app.use('/messages', routes.message);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
