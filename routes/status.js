const { Router } = require('express') ;

const { findGeoHash } = require('../middlewares/findGeoHash');

const statusRouter = Router() ;

const { statusMiddleware } = require('../middlewares/statusMiddleware') ;

statusRouter.get('/info',  statusMiddleware , findGeoHash , async(req , res )=>{
                       res.json({
                            message :"status" ,
                            status : req.status
                       })

})

module.exports = {statusRouter}