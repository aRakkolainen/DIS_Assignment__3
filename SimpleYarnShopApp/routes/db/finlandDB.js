// Based on this website tutorial: https://medium.com/@eslmzadpc13/how-to-connect-a-postgres-database-to-express-a-step-by-step-guide-b2fffeb8aeac



const { Pool } = require('pg');

const pool = new Pool({
    user: 'testerShopper',
    password: 'x', 
    host: 'localhost', 
    port: 5433, 
    database: 'FinlandDB'
});

module.exports = {
    query: (text, params) => pool.query(text, params)
}