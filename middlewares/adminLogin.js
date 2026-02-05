const jwt = require('jsonwebtoken') ;
const bcrypt = require('bcrypt') ;
const {adminModel} = require('../db') ;








async function adminLogin(req , res ){
                 const {email , password} = req.body ;
                 try {
                          const resp = await adminModel.findOne({email}) ;
                          console.log('admin found') ;
                          const validatePass = await bcrypt.compare(password , resp.password) ;
                          if(validatePass){
                                  const token = await jwt.sign({
                                              _id:resp._id
                                  } , process.env.JWT_SECRET_KEY) ;


                                 res.status(200).json({
                                        token 
                                  })
                          }
                          else {
                                throw Error('Incorrect Password') ;
                          }
                          
                 }
                 catch(err){
                              res.status(404).json({
                                    message: "Unauthorized : "+ err.message
                              })
                 }

                 
}

module.exports = {    adminLogin } ;
