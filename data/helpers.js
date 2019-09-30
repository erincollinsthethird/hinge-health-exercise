const pgp = require('pg-promise')();
const mockNodes = require('./nodes-mock-data');

const conString = 'postgres://yqhlcmqy:sBZRjGI3weaGtF0bgWUQL0rhzRNzII7h@salt.db.elephantsql.com:5432/yqhlcmqy';
const db = pgp(conString);

// function organizeData(trees, nodes) {
//   This function will be used to organize trees and nodes so
//   the front-end will receive a useful object
// }

// Will bulk this function up and join in nodes table when I
// have more time
async function getTrees() {
  try {
    const trees = await db.any('SELECT * FROM trees');
    return trees;
  } catch (e) {
    console.log('OH  GOODNESS!', e);
    return e;
  }
}

// Using mock data for nodes due to time constraints
function getNodes() {
  return mockNodes;
}

module.exports = {
  getTrees,
  getNodes
};
