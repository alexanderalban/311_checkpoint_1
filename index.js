const express = require('express')
const bodyParser = require("body-parser");
const users = require('./routes/users');

const app = express()

app.use(bodyParser.json());
app.use(users);

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`)
})