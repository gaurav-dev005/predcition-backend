const express = require('express') ;
const app  = express() ;
const mongoose = require('mongoose') ;
const { areaModel , statusModel } = require('../db') ;
const geohash = require('ngeohash') ;





async function findGeoHash(req , res , next){
            
    try {
                const cells = await statusModel.find({district_id:req.area_Id})
                console.log(cells.length) ;
                 const result = [] ;
                // const dummy = [] ;
                for(let cell of cells){
                  
                       const [minLat , minLon , maxLat , maxLon] = geohash.decode_bbox(cell.geohash) ;
                      // const { latitude , longitude } = geohash.decode(cell.geohash) ;
                  //      console.log(lat , lon)
                        // console.log(cell.updated_at)
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

                        // dummy.push({
                        //         "district": "ImphalWest",
                        //           "geohash": cell.geohash ,
                        //             "lat": latitude,
                        //              "lon": longitude
                        // })
                        // JSON.stringify(dummy)
                }
                  // console.log('dummy')
                  // console.log(dummy) ;

                req.status = result ;
                console.log(result) ;
                next() ;
          }
          catch(err){
              console.log(err.message + 'findGeohash') ;
          }
}

module.exports = { findGeoHash  }