import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("static"));

app.listen(process.env.SERVER_PORT, () => {
  console.log("start");
});
