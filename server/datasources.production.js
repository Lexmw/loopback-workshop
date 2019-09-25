const dotenv = require('dotenv').config();

module.exports = { 
    
    "MongoDB": {
    "url":`mongodb://${process.env.ML_USER}:${process.env.ML_PW}@ds153304.mlab.com:53304/heroku_lw99hnhk`,
    "name": "MongoDB",
    "connector": "mongodb"
  }
}