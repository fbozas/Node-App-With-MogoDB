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