const express = require('express');
const cors = require('cors');

const port = 7000;
const app = express();
const router = express.Router();

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use('/', router);

app.get('/', (req, res) => res.send('Hello World!'));

const server = app.listen(port, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
