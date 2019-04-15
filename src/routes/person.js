let express = require('express')
let router = express.Router()

// QueryString => query property on the request object
// localhost:3000/person?name=anthony&age=32
router.get('/person', (req, res) => {
    if(req.query.name){
        res.send(`You have request me ${req.query.name}`)
    }
    else {
        res.send('You have requested me')
    }
  
})

// Params property on th request object
// localhost:3000/person/thomas
router.get('/person/:name', (req, res) => {
    res.send(`You have requested me ${req.params.name}`)
})

module.exports = router