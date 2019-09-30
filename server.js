const express = require('express');
const cors = require('cors');
const path = require('path');
const { getTrees } = require('./data/helpers');

const port = process.env.PORT || 7000;
const app = express();
const router = express.Router();

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use('/', router);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

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
