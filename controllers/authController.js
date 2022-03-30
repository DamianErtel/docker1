const User = require("../models/userModel");
const bcrypt = require('bcryptjs');

exports.signUp = async (req, res) => {
    const {username, password} = req.body;
    try {
        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = await User.create({
            username,
            password: hashPassword,
        })
        res.status(201).json({
            status: 201,
            data: {
                user: newUser,
            }
        })
    } catch (e) {
        res.status(400).json({
            status: 400,
        })
    }
}

exports.login = async (req, res) => {
    const {username, password} = req.body;
    try{
        const user = await User.findOne({username});
        if(!user){
            return res.status(404).json({
                status: 404,
                // ah yes, much safety
                message: 'User not found',
            })
        }
        const passwordCheck = await bcrypt.compare(password, user.password);
        if(passwordCheck) {
            res.status(200).json({
                status: 200,
            })
        } else {
            res.status(400).json({
                status: 400,
                message: 'incorrect username or password'
            });
        }
    } catch (e) {

    }
}
