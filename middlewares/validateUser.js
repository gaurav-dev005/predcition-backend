const express = require('express') ;

const jwt = require('jsonwebtoken') ;

async function validateToken(req , res ){
          const token = req.headers.token;

         try{ 
            const validateToken = await jwt.verify(token , process.env.JWT_SECRET_KEY) ;
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