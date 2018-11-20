

module.exports = {
    reload: function() {

        var mongoose = require('mongoose');

        var db = mongoose.connection;
        db.collection('accounts').drop();

        db.collection('accounts').insertOne({AccountName: 'Current Account', 
        CurrentAmount: 680, AvaliableAmount: 400, AccountID: '1'})
        db.collection('accounts').insertOne({AccountName: 'Savings Account', 
        CurrentAmount: 2000, AvaliableAmount: 2000, AccountID: '2'})

        db.collection('transactions').drop();

        db.collection('transactions').insertMany([
        {   
            Created_date: "17/11/2018", Recipient: "ATM", AmountDue: 20, AccountID: "1", TypeOfPayment: "CASH",
            BeginningAmount: 700,  Balance: 680
        },
        {   
            Created_date: "16/11/2018", Recipient: "TALKTALK", AmountDue: 41, AccountID: "1", TypeOfPayment: "DIRECT DEBIT",
            BeginningAmount: 741,  Balance: 700
        },
        {   
            Created_date: "16/11/2018", Recipient: "Morrisons", AmountDue: 42, AccountID: "1", TypeOfPayment: "CARD",
            BeginningAmount: 783,  Balance: 741
        },
        {   
            Created_date: "15/11/2018", Recipient: "ATM", AmountDue: 30, AccountID: "1", TypeOfPayment: "CASH",
            BeginningAmount: 813,  Balance: 783
        },
        {   
            Created_date: "13/11/2018", Recipient: "B&Q", AmountDue: 20, AccountID: "1", TypeOfPayment: "CARD",
            BeginningAmount: 833,  Balance: 813
        },
        {   
            Created_date: "13/11/2018", Recipient: "Lucy's Cafe", AmountDue: 6, AccountID: "1", TypeOfPayment: "CARD",
            BeginningAmount: 839,  Balance: 833
        },
        {   
            Created_date: "11/11/2018", Recipient: "Argos", AmountDue: 320, AccountID: "1", TypeOfPayment: "CARD",
            BeginningAmount: 1159,  Balance: 839
        },
        {   
            Created_date: "07/11/2018", Recipient: "ATM", AmountDue: 40, AccountID: "1", TypeOfPayment: "CASH",
            BeginningAmount: 1199,  Balance: 1159
        },
        {   
            Created_date: "03/11/2018", Recipient: "Tescos", AmountDue: 17, AccountID: "1", TypeOfPayment: "CARD",
            BeginningAmount: 1216,  Balance: 1199
        },
        {   
            Created_date: "01/11/2018", Recipient: "Jonathan Smith", AmountDue: 34, AccountID: "1", TypeOfPayment: "ONLINE",
            BeginningAmount: 1250,  Balance: 1216
        },
        



    /* ************************ Savings Account ****************************** */


        {   
            Recipient: "", AmountDue: 0, AccountID: "", TypeOfPayment: "",
            BeginningAmount: 0, Created_date: "18/11/2018", Balance: 0
        },
        {   
            Recipient: "", AmountDue: 0, AccountID: "", TypeOfPayment: "",
            BeginningAmount: 0, Created_date: "18/11/2018", Balance: 0
        },
        {   
            Recipient: "", AmountDue: 0, AccountID: "", TypeOfPayment: "",
            BeginningAmount: 0, Created_date: "18/11/2018", Balance: 0
        },
        {   
            Recipient: "", AmountDue: 0, AccountID: "", TypeOfPayment: "",
            BeginningAmount: 0, Created_date: "18/11/2018", Balance: 0
        },
        {   
            Recipient: "", AmountDue: 0, AccountID: "", TypeOfPayment: "",
            BeginningAmount: 0, Created_date: "18/11/2018", Balance: 0
        },
        {   
            Recipient: "", AmountDue: 0, AccountID: "", TypeOfPayment: "",
            BeginningAmount: 0, Created_date: "18/11/2018", Balance: 0
        },
        {   
            Recipient: "", AmountDue: 0, AccountID: "", TypeOfPayment: "",
            BeginningAmount: 0, Created_date: "18/11/2018", Balance: 0
        },
        {   
            Recipient: "", AmountDue: 0, AccountID: "", TypeOfPayment: "",
            BeginningAmount: 0, Created_date: "18/11/2018", Balance: 0
        }
        
         

        ])
        
    }
 }

