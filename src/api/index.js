const app = require("express")();
const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://shipex_user2:GN1yELtIfcrZ6abO@cluster0.wrp8g.mongodb.net/shipex2?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
let collection = null;
client.connect((err) => {
  if (err) {
    console.log("Error connecting to mongo");
    return;
  }
  console.log("Connected to mongo");
  collection = client.db("shipex2").collection("orders");
});

app.get("/", (req, res) => {
  res.send("Heyyy i'm home");
});

app.post("/create", async (req, res) => {
  const data = req.body;
  try {
    await collection.insertOne(data);
    res.status(200).send("OK");
  } catch (err) {
    res.status(400).send("err");
  }
});
client.close();

app.get("/get", async (req, res) => {
  try {
    const data = []
    const cursor = await collection.find();
    await cursor.forEach((document) => {
      data.push(document)
    });
    console.log(data);
    res.send(data)
  } catch (error) {
  }
});

app.listen(5000, () => {
  console.log("Server is running on localhost:5000");
});
