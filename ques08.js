var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Songs");
  var myobj = {'Song Name':"En Jeevan",Film:"Mersal",'Music Director':"A.R.Rahman",Singer:"Hariharan"};
  dbo.collection("songdetails").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
