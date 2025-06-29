const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
const db = require('./connection')
var BlogModel = require('./model')

app.post("/add",async(req,res)=>{
  try {
    await BlogModel(req.body).save()
    res.json({ message: "data added" });
  } catch (err) {
    console.log(err)
  }
})

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/delete/:id",async (req,res)=>{
  try {
    const id = req.params.id
    await BlogModel.findByIdAndDelete(id)
    res.json({ message: "data deleted" })
  } catch (err) {
    console.log(err)
  }
})
app.put("/update",async (req,res)=>{
  try {
    const { _id, inputs } = req.body
    const dat = await BlogModel.findByIdAndUpdate(_id, inputs, { new: true })
    res.json({ message: "data updated" })
  } catch (err) {
    console.log(err)
  }
})

app.get("/getById/:id",async (req,res)=>{
  try {
    const id = req.params.id
    const data = await BlogModel.findById(id)
    res.json(data)
  } catch (err) {
    console.log(err)
  }
})


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
