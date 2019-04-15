CustomerModel = require('../models/customer.model');
let express = require('express');
let router = express.Router();

// Create new customer
// POST localhost:3000/customer

router.post('/customer', (req, res) => {
    // req.body
    if(!req.body){
        return res.status(400).send('Request body is missing')
    }
    // this is what your passing when you use "body"
    // let user = {
    //     name: 'first name last name',
    //     email: 'email@gmail.com'
    // }

    let model = new CustomerModel(req.body)
    
    model.save()
    .then(doc => {
        if(!doc || doc.length === 0) {
            return res.status(500).send(doc)
        }
        res.status(201).send(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})


// GET request
router.get('/customer', (req, res) => {
    if(!req.query.email){
        return res.status(400).send('MissingURL parameter: email')
    }
    CustomerModel.findOne({
        email: req.query.email, 
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.stats(500).json(err)
    })
})

// UPDATE request
router.put('/customer', (req, res) => {
    if(!req.query.email){
        return res.status(400).send('MissingURL parameter: email')
    }
    CustomerModel.findOneAndUpdate ({
        email: req.query.email,
    }, req.body, {
        new: true
    })

    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.stats(500).json(err)
    })
})

// DELETE request
router.delete('/customer', (req, res) => {
    if(!req.query.email){
        return res.status(400).send('MissingURL parameter: email')
    }

    CustomerModel.findOneAndRemove ({
        email: req.query.email
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.stats(500).json(err)
    })
})

module.exports = router 