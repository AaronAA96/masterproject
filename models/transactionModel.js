var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
    
    Created_date: 
    {
        type: String
    },
    TypeOfPayment:
    {
        type: String
    },
    Recipient:
    {
        type: String
    },
    BeginningAmount: 
    {
        type: Number
    },
    AmountDue: 
    {
        type: Number
    },
    Balance:
    {
        type: Number
    },
    AccountID: {
        type: String
    }
});


module.exports = mongoose.model('transaction', TransactionSchema);