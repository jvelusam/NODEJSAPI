import express from "express";

const app = express();
app.use(express.json());
let MyArrStdu = [];
app.post("/CreateStudent", function (req, res)
{
  let mentor = [];
    mentor = req.body;
    MyArrStdu.push(mentor)
    console.log(MyArrStdu);
  res.send(mentor); //JSON.stringify(response)
});
app.get("/CreateStudent", function (req, res)
{
MyArrStdu ? res.send(MyArrStdu): res.status(404).send({message:"No Data found"})
});
app.listen(2000);
