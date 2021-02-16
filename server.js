const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const dbConfig = require('./config/config.js');
const jwt = require('jsonwebtoken');
const app = express();
const multer = require('multer');
const users_router = require('./app_routes/users_routes');
// const app_model = require('users_model')
// const users_model = require('../app_model/users_model')
const path = require('path');
const fs = require('fs');

// dotenv.config()

// const createToken = async () => {
//     //ahiya signature create karvau hoy tene varify karavanu hoy.
//     const token = await jwt.sign({ _id: "601d17a17f8c89289027d2d0" }, "mmerhfdkppyythndellsjsjnclahfjdoplaj", {
//         expiresIn: "2 hour"
//     })
//     //console.log(token);

//     const userVer = await jwt.verify(token, "mmerhfdkppyythndellsjsjnclahfjdoplaj")
//     //console.log(userVer);
// }

app.set('view engine', 'ejs');
// createToken();
// const upload = multer({ dest: '/upload' })

const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({ storage: storage });


app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(
    multer({ storage: storage }).single('image')
);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to Kamalrana" });
});

app.use('/', users_router);

// listen for requests
app.listen(3000, () => {
    console.log("server listen on port 3000")
});
