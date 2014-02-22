var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/');

var Customer = mongoose.model('Customer', new mongoose.schema({
    name: String,
    type: String,
    year_extinct: Number
}));

var acme = new Customer({business_name: 'Acme'});
acme.save();

//app.configure(function (){
    app.use(express.bodyParser());
//    next();
//})
GET/ ({order by:
    mammals: name;
    

});