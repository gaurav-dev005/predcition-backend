const express = require('express') ;
const app = express() ;
const mongoose = require('mongoose') ;

const Schema = mongoose.Schema ;
const ObjectId = mongoose.ObjectId ;

const adminSchema =  new Schema({
                 'firstName' : String ,
                 'lastName' : String ,
                 'email' : {type : String , unique : true},
                 'password' : String ,
                 
})
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
const adminModel = mongoose.model('admin' , adminSchema) ;

module.exports = {
                  areaModel , statusModel , adminModel
}
