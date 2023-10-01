import express from "express";
import {
  getAllBooks,
  getBooksByID,
  deleteBookByID,
  addBooks,
  updateBooksByID,
} from "../helper.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const { language, rating } = req.query;
  console.log(req.query, language);
  if (req.query.rating) {
    req.query.rating = +req.query.rating;
  }
  const book = await getAllBooks(req);
  res.send(book);
});

//get book by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params, id);
  // const book = bookList.find((usr) => usr.id == id);
  // db.books.findOne({ id: "1" });
  const book = await getBooksByID(id);
  book ? res.send(book) : res.status(404).send({ message: "No Book Found" });
});

//delete book by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const book = await deleteBookByID(id);
  res.send(book);
});

//add books
router.post("/", async (req, res) => {
  const newBooks = req.body;
  console.log(newBooks);
  const result = await addBooks(newBooks);
  res.send(result);
});

//update books by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBooks = req.body;
  const result = await updateBooksByID(id, updatedBooks);
  res.send(result);
});

export const booksRouter = router;