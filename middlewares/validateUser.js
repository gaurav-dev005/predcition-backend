const express = require('express') ;

const jwt = require('jsonwebtoken') ;
const JWT_SECRET_KEY = 'disaster_management_by_dataCrafters' ;

async function validateToken(req , res ){
          try{ const token = req.headers.token;

          
            const validateToken = await jwt.verify(token , JWT_SECRET_KEY) ;
            console.log(validateToken) ;
              res.status(200).json({
                    message:'ok'
              })   
           }
         catch(err){
               console.log(err.message) ;
              res.status(404).json({
                    message : "Try to login Again" + err.message
              })
              
         }
}


module.exports = {
        validateToken
}