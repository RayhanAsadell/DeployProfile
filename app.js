const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile("./public/index.html");
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});