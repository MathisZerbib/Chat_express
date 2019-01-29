const mongoose = require("mongoose");

mongoose.connect('mongodb://matzer:420!Nice@ds131914.mlab.com:31914/get-out').then(() => {
    console.log('Connected to mongoDB')
}).catch(e => {
    console.log('Error while DB connecting');
    console.log(e);
});
var connection = mongoose.connection
module.exports = connection