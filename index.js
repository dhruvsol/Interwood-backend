import express from "express";

import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import value from "./models/value.js";
import blogs from "./models/blogs.js";
import contactus from "./models/contactus.js";
import wardrobe from "./models/wardrobe.js";
import kitchen from "./models/kitchen.js";
const app = express();
app.use(express.json());
app.use(cors());
const uri = process.env.DB_URL;

mongoose
  .connect(uri, {
    dbName: "Interwood",
    useNewUrlParser: true,
    tls: true,
    tlsCAFile: "./1.crt",
  })
  .then(() => {
    console.log("dbconnected");
  });

app.use("/", (req, res) => {
  res.json("Wrong Page");
});

//////////////// kitchen api///////////////
app.use("/kitchen", async (req, res) => {
  const kitobj = new kitchen({
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    enquiry: req.body.enquiry,
    path: req.body.path,
    city: req.body.city,
  });
  try {
    await kitobj.save();
    res.status(200).send("Got the data");
  } catch (error) {
    console.log(error.message);
  }
});
//////////////// wardrobe api///////////////
app.use("/wardrobe", async (req, res) => {
  const Wardrobeobj = new wardrobe({
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    enquiry: req.body.enquiry,
    path: req.body.path,
    city: req.body.city,
  });
  try {
    await Wardrobeobj.save();
    res.status(200).send("Got the data");
  } catch (error) {
    console.log(error.message);
  }
});
//////////////// blogs api///////////////
app.use("/blog", async (req, res) => {
  const Blogobj = new blogs({
    heading: req.body.heading,
    subheading: req.body.subheading,
    image: req.body.image,
  });
  try {
    await Blogobj.save();
    res.status(200).send("Got the data");
  } catch (error) {
    console.log(error.message);
  }
});
//////////////// value api///////////////
app.use("/value", async (req, res) => {
  const Valueobj = new value({
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    enquiry: req.body.enquiry,
    path: req.body.path,
  });
  try {
    await Valueobj.save();
    res.status(200).send("Got the data");
  } catch (error) {
    console.log(error.message);
  }
});
//////////////// contact us api///////////////

app.use("/contactus", async (req, res) => {
  const Contactobj = new contactus({
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    enquiry: req.body.enquiry,
  });
  try {
    await Contactobj.save();
    res.status(200).send("Got the data");
  } catch (error) {
    console.log(error.message);
  }
});

////////////// blog view api /////////////
app.use("/blogs/data", async (req, res) => {
  const blog = await blogs.find({});
  res.json(blog);
});

app.listen(3000, () => {
  console.log("Working at port 3000");
});
