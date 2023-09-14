const User = require('../models/user.model')

exports.findAll = async(req, res) => {
    console.log("Find all users");

    try{
        const result = await User.find();
        res.status(200).json({status:true, data: result});
        console.log("Success in reading all users");
    }catch(err){        
        res.status(400).json({status:false, data: err});
        console.log("Error in reading all users");
    }
}

exports.findOne = async(req, res) => {
    const username = req.params.username;
    console.log("Find one user with username " + username);
    try{
        const result = await User.findOne({username: username});
        res.status(200).json({status:true, data: result});
    }catch(err){        
        res.status(400).json({status:false, data: err});
        console.log("Error in reading user with username " + username);
    }
}

exports.create = async(req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        products: req.body.products,
    });

    console.log("Insert user with username " + req.body.username);

    try{
        const result = await newUser.save();
        res.status(201).json({status:true, data: result});
        console.log("Success in inserting user with username " + req.body.username);
    }catch(err){        
        res.status(400).json({status:false, data: err});
        console.log("Error in inserting user with username " + username);
    }
}

exports.update = async(req, res) => {
    const username = req.body.username;
    console.log("Update user with username " + req.body.username);

    const updateUser = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
    };

    try{
        const result = await User.findOneAndUpdate({username: username}, updateUser);
        res.status(204).json({status:true, data: result});
        console.log("Success in updating user with username " + req.body.username);
    }catch(err){        
        res.status(400).json({status:false, data: err});
        console.log("Error in updating user with username " + username);
    }
}

exports.delete = async(req, res) => {
    const username = req.params.username;
    console.log("Delete user with username " + username);

    try{
        const result = await User.findOneAndRemove({username: username});
        res.status(200).json({status:true, data: result});
        console.log("Success in deleting user with username " + username);
    }catch(err){        
        res.status(400).json({status:false, data: err});
        console.log("Error in deleting user with username " + username);
    }
}