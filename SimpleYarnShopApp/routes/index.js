var express = require('express');
const pgp = require('pg-promise');
var router = express.Router();

// All database connections: 
const finlandDB = require('./db/finlandDB.js');
const ukDB = require('./db/ukDB.js');
const italyDB = require('./db/italyDB.js');



/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */


router.get('/finnishProducts', async (req, res) => {
  console.log("Fetching products from Finland..")
  let queries = {
    yarnQuery: "SELECT * FROM \"Yarn_partitions\"",
    finnishYarnsQuery: "SELECT * FROM public.\"Finnish_yarns\";",
    knittingNeedleQuery: 'SELECT * FROM \"KnittingNeedle\";',
    patternQuery: 'SELECT * FROM \"Pattern\";',
    crochetHookQuery: 'SELECT * FROM \"CrochetHook\";'
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
    
    //console.log(response)

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

  // To-Do change to partitioned table..
  let queries = {
    yarnQuery: "SELECT * FROM \"Yarn_partitions\"",
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
  // To-Do change to partitioned table.. (It might not take so long after all and I want to do it because I now know how..)
  let queries = {
    yarnQuery: "SELECT * FROM \"Yarn_partitions\"",
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


router.post("/filteredYarns", async (req, res) => {
  console.log(req.body.selectedCountry)
  let country = req.body.selectedCountry;
  let query = "";
  let response = {};
  if (country) {
    if(country == "Finland") {
      query = "SELECT * FROM \"Finnish_yarns\"";
      let yarnResult = await finlandDB.query(query);
      console.log(yarnResult.rows);
      response = {yarns: yarnResult.rows};
    } else if(country == "UK") {
      query = "SELECT * FROM \"UK_yarns\"";
      let yarnResult = await ukDB.query(query);
      response = {yarns: yarnResult.rows};
    } else if (country == "Italy") {
      query = "SELECT * FROM \"Italian_yarns\"";
      let yarnResult = await italyDB.query(query);
      response = {yarns: yarnResult.rows};
    }
    res.json(response);
  }
})

router.post("/showAllYarns", async (req, res) => {
  let country = req.body.selectedCountry; 
  if(country == "Finland") {
    query = "SELECT * FROM \"Yarn_partitions\"";
    let yarnResult = await finlandDB.query(query);
    console.log(yarnResult.rows);
    response = {yarns: yarnResult.rows};
  } else if(country == "UK") {
    query = "SELECT * FROM \"Yarn_partitions\"";
    let yarnResult = await ukDB.query(query);
    response = {yarns: yarnResult.rows};
  } else if (country == "Italy") {
    query = "SELECT * FROM \"Yarn_partitions\"";
    let yarnResult = await italyDB.query(query);
    response = {yarns: yarnResult.rows};
  }
  res.json(response);

});




module.exports = router;
