const express = require('express');
const api = require('./routes/api');
const cors = require('cors');
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json()); //For JSON requests
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.get('/', (req, res) => {
  res.send('Hello from server!')
})

app.listen(PORT, () => {
  console.log("Server running on localhost:" + PORT);
})