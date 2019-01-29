let connection = require ('../config/db');

class Message {
    static create (content, callback) {
        var object = {message: content, date: new Date};
        console.log(object);
        connection.collection("messages").insert(object, (err, result) => {
            if (err) throw err;
            callback(result)
        });
    }

        static  all (callback) {
            connection.db.collection("messages", function(err, collection){
                collection.find({}).toArray(function(err, data){
                    callback(data); // it will print your collection data
                });
            });
        }

}
module.exports = Message;