const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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

    // create/post/add data in databse
    app.post('/adduser', async(req, res) => {
      const newUser = req.body;
      const result = await myCollection.insertOne(newUser);
      res.send(result);
    })

    // read/get/find all data from database
    app.get('/users', async(req, res) => {
      const result = await myCollection.find().toArray();
      res.send(result);
    })

    // read/get/find single data from databse by id
    app.get('/users/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await myCollection.findOne(query);
      res.send(result);
    })

    // Deleting an user by id
    app.delete('/users/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}   // we have to make an object id like this.
      const result = await myCollection.deleteOne(query);
      res.send(result);
    })

    /*********  Update(PUT, PATCH) ***********************
    PUT: Replace the whole thing.
    PATCH: Change one part.
    Example: User {name: "Bob", age: 30}
    PUT with {age: 31} → Result: {age: 31} (name is gone!).
    PATCH with {age: 31} → Result: {name: "Bob", age: 31}.
    */
   app.put('/users/:id', async(req, res) => {
     const user = req.body;
     const id = req.params.id;
     const query = {_id: new ObjectId(id)};
     const updatedData = {
      $set: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address
      }
     }
     const options = {upsert: true}; // inert the updatedData if no data match with the query
     const result = await myCollection.updateOne(query, updatedData, options);
     res.send(result);
   })

  } finally {
    // ....
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

