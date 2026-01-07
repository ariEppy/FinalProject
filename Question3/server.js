const express = require("express");
const app = express();
const path = require("path");
const db = require("mongoose");
const PORT = 4000;

db.connect("mongodb+srv://ariela:123@cluster0.mvru3fw.mongodb.net/TeachersList")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error: ", err);
  });

app.use(express.json());
app.use(express.static("client"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

const teacherSchema = new db.Schema({
  fullname: String,
  tz: Number,
  salary: Number,
  subject: String,
});
const Teacher = new db.model("Teacher", teacherSchema);

app.get("/api/teachers", async (req, res) => {
  try {
    const results = await Teacher.find();
    res.json(results);
  } catch (error) {
    res.send("error: ", error);
  }
});

app.post("/api/addTeacher", async (req, res) => {
  const { fullname, tz, salary, subject } = req.body;

  try {
    const teacher = new Teacher({
      fullname,
      tz,
      salary,
      subject,
    });
    let result = await Teacher.findOne({
      fullname: fullname,
      subject: subject,
    });
    if (result) res.send("teacher already exists");
    else await teacher.save();
    res.send("ok");
  } catch (error) {
    res.status(500).send("error");
  }
});

app.post("/api/lower", async (req, res) => {
  const { amount } = req.body;
  try {
    const result = await Teacher.find({ salary: { $lte: amount } });
    if (result.length === 0) res.send("nope");
    else res.send(result);
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT, () => {
  console.log(`server is on http://localhost:${PORT}`);
});
