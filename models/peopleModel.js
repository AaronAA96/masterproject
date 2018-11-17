var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PeopleSchema = new Schema({
    Name: 
    {
        type: String
    },
    SortCode: 
    {
        type: String
    },
    AccountNumber: 
    {
        type: String
    } 
});


module.exports = mongoose.model('people', PeopleSchema);