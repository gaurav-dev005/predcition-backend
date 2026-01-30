const { Router } = require('express') ;

const { findGeoHash } = require('../middlewares/findGeoHash');

const statusRouter = Router() ;

const { statusMiddleware } = require('../middlewares/statusMiddleware') ;


//frontend gfet request handling endpoint
statusRouter.get('/info',  statusMiddleware , findGeoHash , async(req , res )=>{
                       res.json({
                            message :"status" ,
                            status : req.status
                       })

})

module.exports = {statusRouter}