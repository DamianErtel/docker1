const Post = require("../models/postModel")

//localhost:3002/posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json({
            status: 200,
            results: posts.length,
            data: {
                posts
            }
        })
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            status: 400,
            message: err,
        })
    }
}
//localhost:3002/posts/:id
exports.getOnePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json({
            status: 200,
            data: {
                post
            }
        })
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            status: 400,
            message: err,
        })
    }
}

//localhost:3002/posts
exports.createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body)
        res.status(200).json({
            status: 200,
            data: {
                post
            }
        })
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            status: 400,
            message: err,
        })
    }
}

//localhost:3002/posts/:id
exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: 200,
            data: {
                post
            }
        })
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            status: 400,
            message: err,
        })
    }
}

//localhost:3002/posts/:id
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 200,
            data: {
                post
            }
        })
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            status: 400,
            message: err,
        })
    }
}
