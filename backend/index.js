var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var db = require("./database/db.js");
db();


var televisionsSchema = new mongoose.Schema({
  id:Number,
  modelName:String,
  brand:String,
  price:Number,
  size:Number,
});

var televisionsModel = mongoose.model("televisions", televisionsSchema);

var app = express();
app.use(cors());
app.use(express.json());

app.get("/getdata", async (req, res) => {
  try {
    var result = await televisionsModel.find();
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
});

app.post("/adddata", async (req, res) => {
  try {
    var instance = new televisionsModel(req.body);
    await instance.save();
    res.send("televisions added");
  } catch (err) {
    res.send(err.message);
  }
});


app.delete("/delete/:id", async (req, res) => {
  try {
    await televisionsModel.deleteOne({ id: req.params.id });
    res.send(req.params.id + "deleted");
  } catch (err) {
    res.send(err.message);
  }
});
app.listen(9000);
