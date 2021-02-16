const mongoose = require('mongoose');
const dotenv = require('dotenv');
mongoose.Promise = global.Promise;
dotenv.config();
// Connecting to the database
mongoose.connect(process.env.DB_CONNECTION)
    .then(() => {
        console.log("Connection successfully established");
    }).catch(err => {
        console.log('Could not connect to the database.');
        process.exit();
    }); 