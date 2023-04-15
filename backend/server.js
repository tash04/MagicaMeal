const express = require('express');

const Edible = require('./models/edibleModel');

const app = express();
const db = require("./db");

// const userRoute = require('./routes/userRoute');

app.use(express.json());
const ediblesRoute = require('./routes/ediblesRoute');

app.use('/api/edibles/', ediblesRoute)
// app.use('/api/users', userRoute);

app.get('/', (req, res) => {
  res.send('Server Working');
});



const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server Running on port ${port}`));