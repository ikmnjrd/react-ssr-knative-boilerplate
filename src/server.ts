import express from 'express';
import sampleController from './controllers/sampleController';
import testController from './controllers/testController';

const app: express.Express = express();

app.use('/static', express.static('public'));

app.get('/', sampleController);
app.get('/test', testController);

app.listen(process.env.PORT || 3000, function () {
  console.log('express app is started.');
  console.log(__dirname);
});

module.exports = app;