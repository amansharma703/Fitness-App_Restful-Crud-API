// include mongoose
const mongoose = require('mongoose');

// connection url
const connUri = process.env.DATABASE;

// connection creation and creation of new db
mongoose
    .connect(connUri)
    .then(() => console.log('Connection Successfull....'))
    .catch((err) => console.log(err));
