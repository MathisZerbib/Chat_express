let connection = require ('../config/db');
var moment = require('../config/moment');

class Message {

    constructor (datas){

            this.datas = datas
    }
    get id (){
        return this.datas._id
    }

    get message (){
        return this.datas.message
    }
    get created_at (){
        console.log(moment(this.datas.date)+'<============        =============>');
        return moment(this.datas.date)
    }

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
                    callback(data.map((datas) => new Message(datas))); // it will print your collection data
                });
            });
        }
        static  find (id, callback) {
            connection.db.collection("messages", function(err, collection){
                collection.find({_id: [id]}).toArray(function(err, data){
                    callback(new Message(data[0])); // it will print your id
                });
            });
        }
        
}
module.exports = Message;