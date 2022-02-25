const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config({ path: './config.env' });
require('./db/conn');
const port = process.env.PORT || 8000;

app.use(express.json()); // middleware to use req.body

// available routes
app.use('/users', require('./routes/fitness'));

app.listen(port, () => {
    console.log(`Connection is setup at ${port}`);
});
