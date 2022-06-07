import express from 'express';
import bodyparser from 'body-parser';
import routes from './router';

const app = express();
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(3000, () => {
  console.log('Server Running!');
});
