let express = require ('express');
let app = express ();
let personRoute = require('./routes/person');
let customerRoute = require('./routes/customer');
let bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.bodyl}`)
    next()
})
app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))

app.use((req, res, next) =>{
    res.status(404).send('I thinky your losty')
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info('Service has started on ' + PORT)) 