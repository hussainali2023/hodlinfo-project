// // const { default: axios } = require("axios");
// const express = required("express");
// const { MongoClient, ServerApiVersion } = required("mongodb");
// require("dotenv").config();
// const app = express();

// app.use(express.static(__dirname + "/"));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// const uri = process.env.uri_data;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

// console.log(uri);

// app
//   .get("/api", (req, res) => {
//     fetch("https://api.wazirx.com/api/v2/tickers");
//     const collection = client.db("my_database").collection("my_collection");
//     const { name, last, buy, Sell, volume, base_unit } = req.body;
//     collection
//       .insertMany(data)
//       .then(() => res.send("Data saved to database"))
//       .catch((error) => {
//         console.log(error);
//         res.status(500).send(error);
//       });
//   })
//   .catch((error) => {
//     console.log(error);
//     res.status(500).send(error);
//   });

// const port = 5000;

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });

const express = require("express");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const port = process.env.PORT || 5000;

const app = express();
app.use(express.static(__dirname + "/"));
app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", async (req, res) => {
  await fetch("https://api.wazirx.com/api/v2/tickers").then((response) =>
    response.json().then((data) => res.send(data))
  );
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
