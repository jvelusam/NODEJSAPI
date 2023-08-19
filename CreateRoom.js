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
//dbs.
// const dbdata = dbs.
const bookList = [
  {
    id: "1",
    name: "Charlotte's web",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/PU2r9tDwZ1M",
    summary:
      "The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
    language: "English",
  },
  {
    id: "2",
    name: "Attitude is everything",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8.1,
    trailer: "https://www.youtube.com/embed/gqviJoSkf6U",
    summary:
      "Attitude, In psychology, a mental position with regard to a fact or state. Attitudes reflect a tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses a person makes.",
    language: "English",
  },
  {
    id: "3",
    name: "The Secret",
    poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/san61qTwWsU",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from a catalogue",
    language: "English",
  },
  {
    id: "4",
    name: "Discover Your Destiny1",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
    rating: "10",
    trailer: "https://www.youtube.com/embed/o8wUR2JAeUw",
    summary:
      "'Discover Your Destiny' is a story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    language: "Tamil",
  },
  {
    id: "5",
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 8.6,
    trailer: "https://www.youtube.com/embed/Kxvp3eOYphY",
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses a fictitious story about a billionaire mentor teaching a struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
    language: "Hindi",
  },
  {
    id: "6",
    name: "The power is within you",
    poster:
      "https://play-lh.googleusercontent.com/1aghoDaz52K3bbZA3EJGHvEpgaru4uMC3Ud2ik_EAW7SjNLwK7nXxOp_Uad-3L6Ovvg4C2-_d1kqVg=w480-h690-rw",
    rating: 9,
    summary:
      'Louise expands on her philosophy of "loving the self" and shows you how to overcome emotional barriers through learning to listen to your inner voice, loving the child within, letting your true feelings out, and much more!',
    trailer: "https://www.youtube.com/embed/4UzY6ksC6gU",
    language: "Telugu",
  },
  {
    name: "Harry Potter",
    poster:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/Harry-Potter-Movies-in-Order.jpg",
    rating: "10",
    trailer: "trailer 7",
    summary:
      "Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter",
    id: "7",
    language: "English",
  },
];

app.get("/Create", function (req, res) {
  const { language, rating } = req.query;
  console.log(req.query, language, rating);
  let filteredbook = bookList;
  if (language) {
    filteredbook = filteredbook.filter((bk) => bk.language == language);
  }
  if (rating) {
    filteredbook = filteredbook.filter((bk) => bk.rating == rating);
  }
  res.send(filteredbook);
});

app.get("/books/:id", async function (req, res) {
  const { id } = req.params;

  console.log(req.params, id);
  const book = await client
    .db("NodeJSAPI")
    .collection("Books")
    .findOne({ id: "1" });
  res.send(book);
});

app.get("/GetRoomDetails/:RoomNo", async function (req, res) {
  const { RoomNo } = req.params;

  console.log(req.params, RoomNo);
  const book = await client
    .db("NodeJSAPI")
    .collection("CreateRoom")
    .findOne({ RoomNo: "1" });
  res.send(book);
});

app.put("/create/update", function (req, res)
{
  res.send("Hello World");
});

app.delete("/create/delete", function (req, res) {
  res.send("Hello World");
});

app.post("/create/delete", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
