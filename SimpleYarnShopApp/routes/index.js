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
  let queries = {
    yarnQuery: "SELECT * FROM \"Yarn\"",
    knittingNeedleQuery: 'SELECT * FROM \"KnittingNeedle\"',
    patternQuery: 'SELECT * FROM \"Pattern\"',
    crochetHookQuery: 'SELECT * FROM \"CrochetHook\"'
  };
  try {
    let yarnResult = await ukDB.query(queries.yarnQuery);
    let needleResult = await ukDB.query(queries.knittingNeedleQuery);
    let patternResult = await ukDB.query(queries.patternQuery);
    let hookResult = await ukDB.query(queries.crochetHookQuery);
    

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

router.get('/italianProducts', async (req, res) => {
  console.log("Fetching products from Italy..")
  let response = {};
  let queries = {
    yarnQuery: "SELECT * FROM \"Yarn\"",
    knittingNeedleQuery: 'SELECT * FROM \"KnittingNeedle\"',
    patternQuery: 'SELECT * FROM \"Pattern\"',
    crochetHookQuery: 'SELECT * FROM \"CrochetHook\"'
  };

  try {
    let yarnResult = await italyDB.query(queries.yarnQuery);
    let needleResult = await italyDB.query(queries.knittingNeedleQuery);
    let patternResult = await italyDB.query(queries.patternQuery);
    let hookResult = await italyDB.query(queries.crochetHookQuery);
    

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

module.exports = router;
