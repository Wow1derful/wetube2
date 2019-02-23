console.log("Hi");
const express = require("express");
const app = express();

const PORT = 4000;

function handleListing() {
    console.log(`Listening on: http://localhost:${PORT}`)
}

app.listen(PORT, handleListing);