const express = require("express")
const router = express.Router()
const PostSchema = require("../models/post_schema")

router.post("/add_post",(req,res,next) =>{

    add_post = PostSchema(req.body)

    add_post.save((error,result) =>{
        if (error) {
            res.status(404).send(error)
        }
        else{
            res.status(200).send(result)
        }
    })
})

router.get("/get_posts",(req,res,next) =>{

    PostSchema.find((error,result) =>{
        if (error) {
            res.status(404).send(error)
        }
        else{
            res.status(200).send(result)
        }
    })
})

router.get("/get_single_post:author_name",(req,res,next) =>{

    PostSchema.findOne({"author":req.params.author_name},(error,result) =>{
        if (error) {
            res.status(404).send(error)
        }
        else{
            res.status(200).send(result)
        }
    })
})

router.delete("/delete_post",(req,res,next) =>{

    PostSchema.findOneAndDelete({_id:req.body.id},(error,result) =>{
        if (error) {
            res.status(404).send(error)
        }
        else{
            res.status(200).send({"msg":"Post Deleted.."})
        }
    })
})

router.put("/update_post",(req,res,next) =>{

    title = req.body.title
    author = req.body.author
    content = req.body.content

    PostSchema.findOneAndUpdate(
        {_id:req.body.id},
        {$set:{title:title, author:author, content:content}},
        (error,result) =>{
        if (error) {
            res.status(404).send(error)
        }
        else{
            res.status(200).send({"msg":"Post Updated.."})
        }
    })
})

module.exports = router