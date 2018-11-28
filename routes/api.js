let express = require('express');
let router = express.Router();
const factory = require('../connectors/index');


/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    // let pg = await factory.createClient('pg', 'postgresql://Admin:avanza123@blockchain.avanza.com:5432/OLAPCipher');
    let pg = await factory.createClient('pg', 'postgresql://<USERNAME>:<PASSOWRD>@<IPADDRESS>:<PORT>/<DATABASE>');
    await pg.query('CREATE TABLE IF NOT EXISTS mytable (count integer)');
    await pg.query('INSERT INTO mytable VALUES (1)');
    let result = await pg.query('SELECT count(*) FROM mytable');
      res.json(result.rows);
  }
  catch (e) {
    console.log(e);
    res.send(e);
  }
});

module.exports = router;
