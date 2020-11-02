const express=require('express');
const bodyparser=require('body-parser');
const dishRouter= express.Router(); //dishRouter is a mini express app that facilitates handleling with rest api

dishRouter.use(bodyparser.json()); //parse the body of request{json} into an object 'body'


dishRouter.route('/')
.all((req,res,next)=>{         // .all executed 1st and for every rest api (post,get,put), res objet updated will be passed into the next rest api
    console.log("get dish 2");

    res.setHeader('Content-type','text/plain');
    res.statusCode=200;
    next(); //next allows  to continue the next method with the updated object res
})
.get((req,res,next)=>
{
    res.end("All dishes are available to you");
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

.put((req,res,next)=>
{
    res.statusCode=403; 
    res.end("acces forbidden for put method");
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});

dishRouter.route('/:dishId').all((req,res,next)=>{         // .all executed 1st and for every rest api (post,get,put), res objet updated will be passed into the next rest api
    
    res.setHeader('Content-type','text/plain');
    res.statusCode=200;
    next(); //next allows  to continue the next method with the updated object res
})
.get((req,res,next) => {
    res.end('Will send details of the dish: ' + req.params.dishId +' to you!')})
    
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.dishId)})
    
.put( (req, res, next) => {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name +' with details: ' + req.body.description)})
.delete((req, res, next) => {
      res.end('Deleting dish: ' + req.params.dishId);
  });
  

module.exports=dishRouter;

