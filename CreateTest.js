import { MongoClient } from "mongodb";

import express from "express";

const app = new express();
const mongourl = "mongodb://127.0.0.1:27017";

MongoClient.connect(mongourl)
  .then((client) => {
    console.log("Connected to database");
    const db = client.db("Zen_ClassProgramme");
    var taskCollection = db.collection("Product").find();
    console.log("Output" + JSON.stringify(taskCollection));

    taskCollection.forEach(function (err, doc) {
      console.log(JSON.parse(doc));
    });

    //CRUD request
  })
  .catch((error) => console.error(error));

// // Mongo DB
// async function createConnection()
// {

//   const client = new MongoClient(mongourl)
//   await client.connect();
//   console.log("Mongo DB is Connected")

//  return client;

// }

// const dbs = createConnection();

// // // Connection URL
// // var url = 'mongodb://127.0.0.1:27017/NodeJSAPI';
// // // Use connect method to connect to the Server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");

//   insertDocuments(db, function() {
//     db.close();
//   });
// });

app.get("/Create", async function (req, res) {
  const Rooms = await dbs
    .db("NodeJSAPI")
    .collection("CreateRoom")
    .findOne({ RoomNo: 1 });
  res.send(Rooms);
});

app.put("/create/update", function (req, res) {
  res.send("Hello World");
});

app.delete("/create/delete", function (req, res) {
  res.send("Hello World");
});

app.post("/create/delete", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
