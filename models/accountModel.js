var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
    AccountID: 
    {
        type: String
    },
    AccountName: 
    {
        type: String
    },
    CurrentAmount: 
    {
        type: Number
    },
    AvaliableAmount: 
    {
        type: Number
    }
   
});


module.exports = mongoose.model('account', AccountSchema);