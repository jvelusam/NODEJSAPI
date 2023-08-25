import express from "express";

const app = express();
app.use(express.json());
let MyArr = [];
app.post("/CreateMentor", function (req, res) {
  let mentor = [];
    mentor = req.body;
    MyArr.push(mentor)
    console.log(MyArr);
  res.send(mentor); //JSON.stringify(response)
});
app.get("/CreateMentor", function (req, res)
{
MyArr ? res.send(MyArr): res.status(404).send({message:"No Data found"})
});
app.listen(2000);
