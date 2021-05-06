const mongoose = require('mongoose');

const url = process.env.mongoDB_URL;

module.exports=mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});