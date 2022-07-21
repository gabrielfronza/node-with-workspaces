const express = require('express');
const app = express()
const cors = require('cors');
const package_a = require('package_a');
const package_b = require('package_b');

const PORT = 3751;

app.use(cors());

app.get('/', (req, res) => {
    // res.send('Hello from node-with-workspaces');
    res.send('Hello from node-with-workspaces --> ' + package_a + ' ' + package_b);
});

app.listen(PORT, () => {
    console.log(`Listening ${PORT} ...`);
})