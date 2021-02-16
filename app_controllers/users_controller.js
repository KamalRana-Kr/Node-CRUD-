const User = require('../app_model/users_model.js');
const mongoose = require('mongoose');

//check dublicate
exports.validateDublicate = (req, res, next) => {
    const check = {
    let eamil = req.body.email;
    let contact_number = req.body.contact_number;
}
    console.log(ckeck);
    }
    next();
     
let data = db.collection("userdatabase").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
     if (data){
       data.email == req.body.email;
        data.contact_number == req.body.contact_number;
        return data;
}else{
     res.status(200).json({
        message: 'data is dublicate please change your data'
  };
}

exports.create = (req, res) => {
    
    var obj = new User({
        name: req.body.name,
        email: req.body.email,
        contact_number: req.body.contact_number,
        gender: req.body.gender,
        hobbies: req.body.hobbies,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    })
    //check dublicate data.
    validateDublicate();

    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            item.save();
            res.redirect('/');
        }
    });
}
//get api
exports.getData = (req, res) => {
    res.json({ message: 'get api is working' });
}

//find all
exports.findAll = (req, res) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('imagesPage', { items: items });
        }
    });
    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong."
            });
        });
};

// Find a single user with a id
exports.findOne = (req, res) => {
    User.findById(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User does not exist"
                });
            }
            res.send(user);
        }).catch(err => {
            return res.status(500).send({
                message: "Something went wrong."
            });
        });
};
//update user
exports.update = (req, res) => {
    if (!req.body.name) {
        return res.status(400).send({
            message: "Fields can not be empty"
        });
    }
    User.findByIdAndUpdate(req.params.userId, {
        name: req.body.name,
        email: req.body.email,
        contact_number: req.body.contact_number,
        gender: req.body.gender,
        profilepic: req.body.profilepic,
        hobbies: req.body.hobbies
    }, { new: true })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User does not exist"
                });
            }
            res.send(user);
        }).catch(err => {
            return res.status(500).send({
                message: "Something went wrong"
            });
        });
};

//delete api
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User does not exist"
                });
            }
            res.send({ message: "User deleted successfully!" });
        }).catch(err => {
            return res.status(500).send({
                message: "Something went wrong"
            });
        });
};