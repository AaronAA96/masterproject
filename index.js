const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'pug')

// //Import the mongoose module
// var mongoose = require('mongoose');

// //Set up default mongoose connection
// var mongoDB = 'mongodb://127.0.0.1/my_database';
// mongoose.connect(mongoDB);
// // Get Mongoose to use the global promise library
// mongoose.Promise = global.Promise;
// //Get the default connection
// var db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', function (req, res) {
    res.render('index', { title: 'Hallam Banking', message: 'Welcome to Hallam Banking!' })
  })


app.get('/nonskem', function (req, res) {
    res.render('nonskem/nonskemindex', { title: 'Hallam Banking', message: 'Welcome to Hallam Banking! NON SKEM' })
})

app.get('/nonskem/checkbalance', function(req, res) {
  res.render('nonskem/nonskemCheckBalance',{ title: 'Hallam Banking', message: 'Check Balance'})
})

app.get('/nonskem/transferpayment', function(req, res) {
res.render('nonskem/nonskemTransferPayment',{ title: 'Hallam Banking', message: 'Transfer Payment'})
})



// ************************************************ Shem ****************************************** //

app.get('/skem', function (req, res) {
  res.render('skem/skemindex', { title: 'Hallam Banking', message: 'Welcome to Hallam Banking! SKEM' })
})

app.get('/skem/checkbalance', function(req, res) {
    res.render('skem/skemCheckBalance',{ title: 'Hallam Banking', message: 'Check Balance'})
})

app.get('/skem/transferpayment', function(req, res) {
  res.render('skem/skemCheckBalance',{ title: 'Hallam Banking', message: 'Transfer Payment'})
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

