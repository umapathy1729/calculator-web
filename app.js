const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Calculator App Running in Jenkins</h1>");
});

app.get('/add', (req, res) => {
    let a = 10;
    let b = 5;
    res.send("Addition Result: " + (a + b));
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
