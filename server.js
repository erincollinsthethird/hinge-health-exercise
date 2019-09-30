const express = require('express');
const cors = require('cors');
const { getTrees } = require('./data/helpers');

const port = 7000;
const app = express();
const router = express.Router();

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use('/', router);

router.get('/trees', async (req, res) => {
  try {
    const data = await getTrees();
    return res.send(data);
  } catch (e) {
    return res.send(e);
  }
});

const server = app.listen(port, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
