

const { areaModel  } = require('../db') ;


//fetching districts(area) from database

async function statusMiddleware(req , res ,next){
                   console.log(req.query) ;
                 const area = req.query.area.toLowerCase();
                     console.log(area) ;
                 if(area.length == 0){
                      res.status(403).json({
                           message : "No data available" 
                      })
                      return ;
                 }


                 try{
                          const areaFound = await areaModel.findOne({
                                      district_name : area 
                          }) 
                          console.log(areaFound) ; 
                           req.area_Id = areaFound._id ;

                             next() ;
                         }
                 catch(err){
                          console.log("can't find area "+ err.message)
                 }


                 
               
}

module.exports = { statusMiddleware }