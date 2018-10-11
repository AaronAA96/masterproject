var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountModel = new Schema({
    Name: 
    {
        type: String,
        required: 'Need Title'
    },
    Amount: 
    {
        type: Date,
    },
    avaliable: 
    {
        type: Date,
    },
    worship_Team:[{type: Schema.Types.ObjectId, ref:'user'}],
    Tech_Team:[{type: Schema.Types.ObjectId, ref:'user'}],
    welcome_Team:[{type: Schema.Types.ObjectId, ref:'user'}],
    required_items:[{type: 'String'}],
    Stage: 
    {
        type: String
    },
    created_date: 
    {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('service', ServiceSchema);