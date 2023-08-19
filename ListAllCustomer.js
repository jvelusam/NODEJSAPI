import { MongoClient } from "mongodb";

import express from "express";

const app = express();

const mongourl = "mongodb://127.0.0.1:27017";
// Mongo DB
async function createConnection() {
  const client = new MongoClient(mongourl);
  await client.connect();
  console.log("Mongo DB is Connected");
  return client;
}

const client = await createConnection();

app.get("/ListAllCustDetails", async function (req, res) {
  const { RoomNo } = req.params;

  console.log(req.params, RoomNo);
  const book = await client
    .db("NodeJSAPI")
    .collection("ListAllCustomer")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  res.send(book);
});

app.listen(5000);