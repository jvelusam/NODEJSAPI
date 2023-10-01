// const express = require("express");
// const { MongoClient } = require("mongodb");
import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import { booksRouter } from "./Routes/Book.js";
dotenv.config();
const app = express();
const PORT = 9000;
// app.use(cors());
// req ->  what we request/send to server
// res => wat we receive from server

const MONGO_URL = process.env.MONGO_URL;

// console.log(process.env.MONGO_URL);

// "mongodb://127.0.0.1:27017";

//Inbuilt Middleware
//interceptor | converting body to JSON
app.use(express.json());

//mongodb://localhost:27017

//mongodb connection

async function createConnection()
{
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("MongoDB is connected");
  return client;
}

export const client = await createConnection();

//REST API endpoints

app.get("/", (req, res) => {
  res.send("Hello Everyone 🥳🥳🥳");
});

app.use("/books", booksRouter);

app.use("/movies", moviesRouter);

 app.use("/user", usersRouter);

// app.use("/movie", moviesRouter);

// app.use("/user", usersRouter);

app.listen(PORT, () => console.log("Server started on the PORT", PORT));