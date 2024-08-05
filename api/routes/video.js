const mongoose = require("mongoose");
const VideosUpload =require("../models/Videos");
const{ sendError,sendSuccess }= require("../helpers/help") ;
const router = require("express").Router();


///POST
router.get("/", async (req, res) => {
    
    try {
     console.log("In get Method")
        
      
      const  videos = await VideosUpload.find();
      
      
      res.status(200).json(videos);
    } catch (err) {
      res.status(500).json(err);
    }

  })




  router.post("/", async (req, res) => {
        try {
            var newVideo =
             new VideosUpload({
               
               username:req.body.username,
               Poster:req.body.Poster,

                video: req.body.video,
                desc:req.body.desc,
                title:req.body.title,
                
 categories:req.body.categories,
   


    
            })
           

        const Video=    await newVideo.save();
            return sendSuccess(res,Video,200);
        }
        catch (err) {
            console.log(err);
            return sendError(res, "Video Upload failed !!!!!",500);
        }
    
      
     

    })
    module.exports = router;