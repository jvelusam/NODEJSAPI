import express from "express";

const app = express();
app.use(express.json());

app.post("/CreateMentor", function (req, res) {
  let mentor = [];
  mentor = req.body;
  console.log("Data" + mentor);
  res.send(mentor);
});
app.get("/CreateMentor", function (req, res) {
  let mentor = [];
  mentor = req.body;
  console.log("Data" + mentor);
  res.send(mentor);
});
app.listen(4000);
