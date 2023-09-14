exports.findAll = async(req, res) => {
    console.log("Find all users");

    res.status(200).json({status:true});
}

exports.findOne = async(req, res) => {
    const username = req.params.username;
    console.log("Find one user with username " + username);

    res.status(200).json({status:true});
}