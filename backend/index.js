// require("dotenv").config();
// const express = require("express")
// const app = express()
// const router = require("./router/index.router.js")
// const bodyParser = require('body-parser')
// const { connectDB } = require("./lib/helpers/db.js")

// app.use(bodyParser.json())
// app.use("/api",router)

// app.get("/", (req, res) => {
//   res.send("Hello World")
// })

// app.listen(5000, () => {
//   console.log("app started")
//   connectDB()
// })

require("dotenv").config();
const dns = require("node:dns");

dns.setServers([
  "1.1.1.1",
  "8.8.8.8"
]);

const express = require("express");
const bodyParser = require("body-parser");

const { connectDB } = require("./lib/helpers/db.js");
const router = require("./router/index.router.js");

const app = express();

app.use(bodyParser.json());

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();