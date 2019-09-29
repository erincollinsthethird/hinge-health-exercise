const pgp = require('pg-promise')();

const conString = 'postgres://yqhlcmqy:sBZRjGI3weaGtF0bgWUQL0rhzRNzII7h@salt.db.elephantsql.com:5432/yqhlcmqy';
const db = pgp(conString);

async function getTrees() {
  try {
    const trees = await db.any('SELECT * FROM trees');
    return trees;
  } catch (e) {
    console.log('OH  GOODNESS!', e);
    return e;
  }
}

module.exports = {
  getTrees
};
