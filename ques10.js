var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Songs");
  dbo.collection("songdetails").find({}, {_id:0, Singer:1, 'Song Name':0,'Music Director':0}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
