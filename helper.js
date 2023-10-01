import { client } from "./index.js";

import bcrypt from "bcrypt";
export async function getAllBooks(req)
{
  return await client
    .db("b46-we")
    .collection("books")
    .find(req.query)
    .toArray();
}
export async function getBooksByID(id) {
  return await client.db("b46-we").collection("books").findOne({ id: id });
}
export async function deleteBookByID(id) {
  return await client.db("b46-we").collection("books").deleteOne({ id: id });
}
export async function addBooks(newBooks) {
  return await client.db("b46-we").collection("books").insertMany(newBooks);
}
export async function updateBooksByID(id, updatedBooks)
{
  return await client
    .db("b46-we")
    .collection("books")
    .updateOne({ id: id }, { $set: updatedBooks });
}

//movies

export async function getAllMovies(req) {
  return await client.db("IMDB-movies").collection("movies").find({}).toArray();
}

//users -> generate Password

export async function genPassword(password) {
  const salt = await bcrypt.genSalt(10); //bcrypt.genSalt(no. of rounds)
  console.log(salt);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);
  return hashedPassword;
}

export async function createUser(username, hashedPassword) {
  return await client
    .db("b46-we")
    .collection("users")
    .insertOne({ username: username, password: hashedPassword });
}

export async function getUserByName(username) {
  return await client
    .db("b46-we")
    .collection("users")
    .findOne({ username: username });
}