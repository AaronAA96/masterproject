const express = require('express')
const app = express()
const port = 3000


//Import the mongoose module
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var _ = require('lodash');
var compression = require('compression');
var Transaction = require('./models/TransactionModel');
var Account = require('./models/AccountModel');



    app.set('view engine', 'pug')
    app.use(bodyParser.urlencoded({ extended:  false }));
    app.use(bodyParser.json());
    app.use(cors());
    app.use(compression());

//Set up default mongoose connection
var mongoDB = 'mongodb://localhost/skemDB';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;


mongoose.connection.on('connected', function () 
{  
    console.log('Mongoose default connection open to ' + mongoDB);
}); 

mongoose.connection.on('error',function (err) 
{  
    console.log('Mongoose default connection error: ' + err);
}); 

mongoose.connection.on('disconnected', function () 
{  
    console.log('Mongoose default connection disconnected'); 
});

process.on('SIGINT', function() 
    {  
        mongoose.connection.close(function () 
        { 
            console.log('Mongoose default connection disconnected through app termination'); 
            process.exit(0); 
        }); 
    }); 

//Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// var db = mongoose.connection;

// db.collection('accounts').drop();

// db.collection('accounts').insertOne({AccountName: 'Current Account', CurrentAmount: 500, AvaliableAmount: 400, AccountID: '1'})
// db.collection('accounts').insertOne({AccountName: 'Savings Account', CurrentAmount: 2000, AvaliableAmount: 2000, AccountID: '2'})
const records = require('./db')

let val = records.reload();


// ************************************************ HOME ****************************************** //

app.get('/', function (req, res) {
    res.render('index', { title: 'Hallam Banking', message: 'Welcome to Hallam Banking!' })
  })

// ************************************************ NON-Skem ****************************************** //


app.get('/nonskem', function (req, res) {
    Account.find(function(err, feedback)
    {
        res.render('nonskem/nonskemindex', { title: 'Hallam Banking', message: 'Welcome to Hallam Banking!' , accounts: feedback})
    })
});


// ************************************************ checkbalance - NON-Skem ****************************************** //

app.param('AccountID', function(req, res, next, id) 
{
   
    console.log(id);
    Account.findOne({AccountID : id})
    .then(function(account)
    {
        if(!account) 
        {
            next(new Error('No account with that id.'));
        }
        else
        {
            
            req.account = account; 
            next();
        }
    }, function(err) 
    {
        next(err);
    })
}).get('/nonskem/checkbalance/:AccountID', function(req, res) {
    
    
    Transaction.find({AccountID: req.account.AccountID} ,null , {sort: {Created_date: -1}},function(err,feedback) {

        console.log(feedback)

        res.render('nonskem/nonskemCheckBalance',{ title: 'Hallam Banking', message: 'Check Balance', transactions: feedback, account: req.account})
    });
 })


 // ************************************************ transferpayment - NON-Skem ****************************************** //

app.param('AccountID', function(req, res, next, id) 
{
   
    console.log(id);
    Account.findOne({AccountID : id})
    .then(function(account)
    {
        if(!account) 
        {
            next(new Error('No account with that id.'));
        }
        else
        {
            
            req.account = account; 
            next();
        }
    }, function(err) 
    {
        next(err);
    })
}).get('/nonskem/transferpayment/:AccountID', function(req, res) {

    var feedback = req.account;
    console.log(feedback)
    console.log(feedback.AccountName)
    res.render('nonskem/nonskemTransferPayment',{ title: 'Hallam Banking', message: 'Transfer Payment' , account: feedback})

}).post('/nonskem/transferpayment/:AccountID', function(req, res) {

    var newTransaction = new Transaction(req.body);
    console.log(req.account)
    
    newTransaction.AccountID = req.account.AccountID;
    newTransaction.TypeOfPayment = "ONLINE";
    newTransaction.BeginningAmount = req.account.CurrentAmount;
    var date = new Date();

    var dd = date.getDate();
    var mm = date.getMonth()+1; 
    var yyyy = date.getFullYear();
    
    date = dd + '/' + mm + '/' + yyyy;
    newTransaction.Created_date = date.toString();
    newTransaction.Balance = req.account.CurrentAmount - req.body.AmountDue;


    var account = req.account;
    var update = req.body;
    update.CurrentAmount = newTransaction.Balance;
    account.CurrentAmount = newTransaction.Balance;
    console.log(req.body);
    console.log(req.account);
    Transaction.create(newTransaction)
    .then(function(newTransaction)
    {
        console.log(account);
        _.merge(account, update);

        account.save(function(err, saved)
        {
        if (err)
        {
            next(err);
        }
        else
        {
            res.redirect('/nonskem');
        }
    })
        
    },  
    function(err) 
    {
        next(err);
    });

})


// ************************************************ Skem ****************************************** //

app.get('/skem', function (req, res) {

    Account.find(function(err, feedback)
    {
        res.render('skem/skemindex', { title: 'Hallam Banking', message: 'Welcome to Hallam Banking!' , accounts: feedback})
    });

})

// ************************************************ checkbalance - Skem ****************************************** //

app.param('AccountID', function(req, res, next, id) 
{
   
    console.log(id);
    Account.findOne({AccountID : id})
    .then(function(account)
    {
        if(!account) 
        {
            next(new Error('No account with that id.'));
        }
        else
        {
            
            req.account = account; 
            next();
        }
    }, function(err) 
    {
        next(err);
    })
}).get('/skem/checkbalance/:AccountID', function(req, res) {

    
    Transaction.find({AccountID: req.account.AccountID},null, {sort: {Created_date: -1}},function(err,feedback) {

        console.log(feedback)

        res.render('skem/skemCheckBalance',{ title: 'Hallam Banking', message: 'Check Balance', transactions: feedback, account: req.account})

    });
})

// ************************************************ transferpayment - Skem ****************************************** //

app.param('AccountID', function(req, res, next, id) 
{
   
    console.log(id);
    Account.findOne({AccountID : id})
    .then(function(account)
    {
        if(!account) 
        {
            next(new Error('No account with that id.'));
        }
        else
        {
            
            req.account = account; 
            next();
        }
    }, function(err) 
    {
        next(err);
    })
}).get('/skem/transferpayment/:AccountID', function(req, res) 
{
   
    var feedback = req.account;
    console.log(feedback)
    
    
    res.render('skem/skemTransferPayment',{ title: 'Hallam Banking', message:'Transfer Payment', account : feedback})

}).post('/skem/transferpayment/:AccountID', function(req, res, next) {

  
    var newTransaction = new Transaction(req.body);
    console.log(req.account)
    
    newTransaction.AccountID = req.account.AccountID;
    newTransaction.TypeOfPayment = "ONLINE";
    newTransaction.BeginningAmount = req.account.CurrentAmount;
    var date = new Date();

    var dd = date.getDate();
    var mm = date.getMonth()+1; 
    var yyyy = date.getFullYear();
    
    date = dd + '/' + mm + '/' + yyyy;
    newTransaction.Created_date = date.toString();
    newTransaction.Balance = req.account.CurrentAmount - req.body.AmountDue;


    var account = req.account;
    var update = req.body;
    update.CurrentAmount = newTransaction.Balance;
    account.CurrentAmount = newTransaction.Balance;
    console.log(req.body);
    console.log(req.account);
    Transaction.create(newTransaction)
    .then(function(newTransaction)
    {
        console.log(account);
        _.merge(account, update);

        account.save(function(err, saved)
        {
        if (err)
        {
            next(err);
        }
        else
        {
            res.redirect('/skem');
        }
    })
        
    },  
    function(err) 
    {
        next(err);
    });
    
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))










