const express = require('express') ;
const app = express() ;
const mongoose = require('mongoose') ;

const Schema = mongoose.Schema ;
const ObjectId = mongoose.ObjectId ;

const areaSchema = new Schema({
             'district_name' : {type: String  , unique:true} ,
             "locat"         : {
                                   "maxLat" :  Number , 
                                   "minLat" :  Number , 
                                   "maxLon" : Number , 
                                   "minLon" : Number , 
                               }                  
})


const statusSchema  = ({
                'district_id' : ObjectId ,
                'geohash' : String ,
                'cal_type' : String ,
                'landslide' : {
                              'cal_type' :String ,
                              'risk_percentage' : Number ,
                              'updated_at': {
                                  type: Date,
                                  default: Date.now
                               }
                } , 
                'flood' : {
                              'cal_type' :String ,
                              'risk_percentage' : Number ,
                              'updated_at': {
                                  type: Date,
                                  default: Date.now
                               }
                           } 
                
                

})



const areaModel = mongoose.model('area' , areaSchema) ;
const statusModel = mongoose.model('status' , statusSchema) ;

module.exports = {
                  areaModel , statusModel 
}
