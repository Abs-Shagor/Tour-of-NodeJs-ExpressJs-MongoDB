const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from abs shagor');
})
app.get('/contact', (req, res) => {
    res.send('The contact information is coming so00on!');
})

app.listen(port, () => {
    console.log(`My server is running on port: ${port}`);
})