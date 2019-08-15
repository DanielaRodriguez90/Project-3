const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');

const items = require('./routes/api/items')

const app = express();

//middleware
app.use(bodyParser.json());

//DB connet
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose.connect(db)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/items', items);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));