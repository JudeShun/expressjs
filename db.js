exports.dbConnect = function(value) {

    var MongoClient = require('mongodb').MongoClient;
    //Create a database named "mydb":
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
        console.log("successfully connected.")
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.createCollection("customers", function(err, collection) {
            collection.insert({data: value});
            if (err) throw err;
            console.log("Collection created!");
            db.close();
        });
    })
}


