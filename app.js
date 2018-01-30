const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://khalil:123456@ds153501.mlab.com:53501/candystore');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', require('./routes/routes'));

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  res.status(404).send({ error: { message: 'route does not exist' } });
});

app.listen(process.env.port || 4000, function() {
  console.log('now listening at port 4000');
});
