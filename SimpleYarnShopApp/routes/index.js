var express = require('express');
const pgp = require('pg-promise');
var router = express.Router();

// All database connections: 
const finlandDB = require('./db/finlandDB.js');
const ukDB = require('./db/ukDB.js');
const italyDB = require('./db/italyDB.js');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', async (req, res) => {
  try {
    console.log("HELLO!!!")
    const result = await finlandDB.query('SELECT * FROM Yarn');
    console.log(result);
    res.json(result.rows);
  } catch(err) {
    console.error(err);
    res.status(500).send('Internal Server Error occured');
  }
})

router.get('/finnishProducts', async (req, res) => {
  console.log("Fetching products from Finland..")
  let queries = {
    yarnQuery: "SELECT * FROM \"Yarn\"",
    knittingNeedleQuery: 'SELECT * FROM \"KnittingNeedle\"',
    patternQuery: 'SELECT * FROM \"Pattern\"',
    crochetHookQuery: 'SELECT * FROM \"CrochetHook\"'
  };
  
  console.log(queries.yarnQuery)
  let response = {};
  try {
    let yarnResult = await finlandDB.query(queries.yarnQuery);
    let needleResult = await finlandDB.query(queries.knittingNeedleQuery);
    let patternResult = await finlandDB.query(queries.patternQuery);
    let hookResult = await finlandDB.query(queries.crochetHookQuery);
    

    response = {
      yarns: yarnResult.rows,
      needles: needleResult.rows, 
      patterns: patternResult.rows, 
      hooks: hookResult.rows
    }

    console.log(response)

  } catch(error) {
    response = {
      'products': [],
      'errorMsg': error
    }
  }
res.json(response);
  
})

router.get('/britishProducts', async (req, res) => {
  console.log("Fetching products from UK..")
  let response = {}
  try {
  let query = "SELECT * FROM product";
  let result = await ukDB.query(query);

  response = {
    'products': result.rows
  };

} catch(error) {
  response = {
    'products': [],
    'errorMsg': error
  }
}
  res.json(response);
})

router.get('/italianProducts', async (req, res) => {
  console.log("Fetching products from Italy..")
  let query = "SELECT * FROM product";
  const result = await italyDB.query(query);

  const response = {
    'products': result.rows
  };

  res.json(response);
  
})

module.exports = router;
