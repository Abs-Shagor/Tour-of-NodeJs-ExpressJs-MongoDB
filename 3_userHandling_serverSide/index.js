const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000 || process.env.PORT;

const { MongoClient, ServerApiVersion } = require('mongodb');
/********************** Connecting MongoDB **************************/
// user: SimpleUserHandling        password: EqQMC5P7Tmmyvbig
const uri = "mongodb+srv://SimpleUserHandling:EqQMC5P7Tmmyvbig@userhandling.g6xehje.mongodb.net/?retryWrites=true&w=majority&appName=userHandling";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const myDB = client.db('myDB');
    const myCollection = myDB.collection('Allusers');

    app.post('/adduser', async(req, res) => {
      const newUser = req.body;
      const result = await myCollection.insertOne(newUser);
      res.send(result);
    })

  } finally {
    
  }
}
run().catch(console.dir);


/********************** Let's Code **************************/
app.get('/', (req, res) => {
    res.send('Hello from the server side!!!');
})


app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
});

