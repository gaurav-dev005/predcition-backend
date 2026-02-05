const express = require('express') ;

const z = require('zod') ;
const bcrypt = require('bcrypt') ;
const {adminModel} = require('../db') ;

async function adminSignup(req , res , next ){
        const {firstName, lastName , email , password } = req.body ;

        const signupBody = z.object({
                           firstName : z.string().min(3).max(25) ,
                           lastName : z.string().min(3).max(25) ,
                           email : z.email() ,
                           password : z.string().min(8)

        })

        const validateBody = signupBody.safeParse(req.body) ;
        if(validateBody.success){
                const hashedPassword = await bcrypt.hash(password , 10) ;
                 const payload = {
                                firstName , lastName , email , password:hashedPassword 
                 }

                 try { 
                        const response =   await adminModel.create(payload) ;
                          console.log('Admin Signed Up  =  '+ response) ;
                          res.status(200).json({
                                message : "Registered Succesfully" 
                          })
                    }
                 catch(err){
                              res.status(403).json({
                                   message : "Could not Register You as Admin"
                              })
                 }


              
        }
        else {
              res.status.json('Wrong format '+ validateBody.error.flatten) ;
        }

}

module.exports = {
         adminSignup
}