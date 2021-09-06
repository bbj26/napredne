const express = require('express');
const jwt = require('jsonwebtoken')
const router = express.Router();
const mongoose = require('mongoose');
const db = 'mongodb+srv://branimir0807:branex432@cluster0.2j7cc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const Account = require('../models/account');
const Item = require('../models/item');

mongoose.connect(db, err => {
    if (err) {
        console.error("Error! " + err);
    } else {
        console.log("Connected to MongoDB");
    }
})

router.get('/', (req, res) => {
    res.send('From API route');
});

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send("Unauthorized request")
    }

    let token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
        return res.status(401).send("Unauthorized request")
    }

    let payload = jwt.verify(token, 'secretKey');
    if (!payload) { 
        return res.status(401).send("Unauthorized request")
    }

    req.userId = payload.subject;
    next();
}

//registration api
router.post('/register', (req, res) => {
    //extract the user data from the request object and convert it into the model that mongoose understands
    let userData = req.body;
    let user = new User(userData);

    //save that user into the database
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        } else {
            let payload = { subject: registeredUser._id};
            let token = jwt.sign(payload, 'secretKey');
            res.status(200).send({token});            
        }
    })
});

//login api
router.post('/login', (req, res) => {
    let userData = req.body;

    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.log(error);
        } else {
            if (!user) {
                res.status(401).send("Invalid email");
            } else {
                if (user.password !== userData.password) {
                    res.status(401).send("Invalid password");
                } else {
                    let payload = { subject: user._id};
                    let token = jwt.sign(payload, 'secretKey');
                    res.status(200).send({token});
                }
            }
        }
    }) 
})

//get all accounts api
router.get('/accounts', (req, res) => {
    Account.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    })
})

//get single account
router.get('/accounts/:id', (req, res) => {
    Account.findById(req.params.id, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err)
        }
    })
})

//add new account to database api
router.post('/accounts/add', (req, res) => {
    let accountData = req.body;
    let account = new Account(accountData);

    account.save((error, savedAcc) => {
        if (error) {
            console.log(error)
        } else {
            res.status(200).json({code: 200, message: 'Account added successfully', addedAccount: savedAcc})
        }
    })
})

//update existing acocunt
router.put('/accounts/:id', (req, res) => {
    const updatedAcc = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        street: req.body.street,
        zipcode: req.body.zipcode,
        country: req.body.country
    };

    Account.findByIdAndUpdate(req.params.id, {$set: updatedAcc}, {new: true}, (error, data) => {
        if (!error) {
            res.status(200).json({code: 200, message: 'Account successfully updated', updatedAccount: data});
        } else {
            console.log(error);
        }
    })
})

//delete account
router.delete('/accounts/:id', (req, res) => {
    Account.findByIdAndRemove(req.params.id, (error, data) => {
        if (!error) {
            res.status(200).json({code: 200, message: 'Account successfully deleted', deletedAccount: data})
        } else {
            console.log(error)
        }
    })
})


//get all items in storage
router.get('/items', (req, res) => {
    Item.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    })
});

//get specific item
router.get('/items/:id', (req, res) => {
    Item.findById(req.params.id, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err)
        }
    })
})

//add new item
router.post('/items/add', (req, res) => {
    let itemData = req.body;
    let item = new Item(itemData);

    item.save((error, savedItem) => {
        if (error) {
            console.log(error)
        } else {
            res.status(200).json({code: 200, message: 'Item added successfully', addedItem: savedItem})
        }
    })
})

//update item
router.put('/items/:id', (req, res) => {
    const updatedItem = {
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        imageUrl: req.body.imageUrl
    };

    Item.findByIdAndUpdate(req.params.id, {$set: updatedItem}, {new: true}, (error, data) => {
        if (!error) {
            res.status(200).json({code: 200, message: 'Item successfully updated', _updatedItem: data});
        } else {
            console.log(error);
        }
    })
})

router.delete('/items/:id', (req, res) => {
    Item.findByIdAndRemove(req.params.id, (error, data) => {
        if (!error) {
            res.status(200).json({code: 200, message: 'Item successfully deleted', deletedItem: data})
        } else {
            console.log(error)
        }
    })
})

module.exports = router;