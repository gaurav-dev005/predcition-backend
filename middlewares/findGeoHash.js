const express = require('express') ;
const app  = express() ;
const mongoose = require('mongoose') ;
const { areaModel , statusModel } = require('../db') ;
const geohash = require('ngeohash') ;



//looks for data of each geohashes in  databse and then creates the response payload to send to frontend

async function findGeoHash(req , res , next){
            
    try {
                const cells = await statusModel.find({district_id:req.area_Id}) //calling for geohashes and details stored in database
                console.log(cells.length) ;
                 const result = [] ;
               
                for(let cell of cells){
                  
                       const [minLat , minLon , maxLat , maxLon] = geohash.decode_bbox(cell.geohash) ;
                       
                       //creating response payload
                       result.push({
                                bounds : {minLat , minLon , maxLat , maxLon},
                                flood : {
                                           cal_type : 'flood' ,
                                           risk_percentage : cell.flood.risk_percentage ,
                                           updated_at : cell.flood.updated_at 
                                } ,
                                landslide : {
                                           cal_type : 'landslide' ,
                                           risk_percentage : cell.landslide.risk_percentage ,
                                           updated_at : cell.landslide.updated_at 
                                } 
                               
                               
                        })

           
                }
             

                req.status = result ;
                console.log(result) ;
                next() ;
          }
          catch(err){
              console.log(err.message + 'findGeohash') ;
          }
}

module.exports = { findGeoHash  }