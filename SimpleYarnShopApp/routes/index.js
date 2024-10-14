var express = require('express');
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
    const result = await finlandDB.query('SELECT * FROM Product');
    console.log(result);
    res.json(result.rows);
  } catch(err) {
    console.error(err);
    res.status(500).send('Internal Server Error occured');
  }
})

router.get('/finnishProducts', async (req, res) => {
  console.log("Fetching products from Finland..")
  let query = "SELECT * FROM product";
  let response = {};
  try {
    let result = await finlandDB.query(query);
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
