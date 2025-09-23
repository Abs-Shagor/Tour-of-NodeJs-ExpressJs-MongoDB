const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors()); // cors is a middleware which allow requests between frontend and backend
app.use(express.json()); // this middleware parses/convert the incoming json into object and makes the data available in req.body.

app.get('/', (req, res) => {
    res.send('Hello from my phone server!');
})


const  phones = require('./1_phones_data.json');
app.get('/phonesInfo', (req, res) => {
    res.send(phones);
})
app.get('/phonesinfo/:id', (req, res) => {
    let id = req.params.id;
    id = parseInt(id); // as the url is string, we aill get the id as string and have to convert it into integer.
    console.log(id);
    const phone = phones.find(phone => {
        return phone.id===id;
    })
    res.send(phone);
})


app.post('/phonesInfo', (req, res) => {
  const newPhone = req.body;
  phones.push(newPhone);
  res.json(phones);
});


app.listen(port, () => {
    console.log(`My phone server is running on port: ${port}`);
})



