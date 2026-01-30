const {Router , express} = require('express') ;
const {statusModel} = require('../db') ;
const modelDataRouter = Router() ;

modelDataRouter.post('/update' , async(req  , res)=>{
                const { cal_type , generated_at , predictions} = req.body ; //retreiving data from request body of model request body
                
                  for(const p of predictions){
                                      //updating databse for each geohashes in databases
                                   try {
                                           const resp = await statusModel
                                                              .updateOne({geohash:p.geohash} ,
                                                                          { $set:{
                                                                              [`${cal_type}.risk_percentage`]:p.risk_percentage ,
                                                                              [`${cal_type}.updated_at`] :    generated_at
                                                                             }
                                                                                        
                                                                                                  })
                                            console.log(resp)
                                       
                                           console.log('Updated DB with model data '+ `${cal_type}`) ;
                                                                                               
                                   }
                                   catch(err){
                                                 res.status(404).json({
                                                         message:`failed to update err : ${err.message}`
                                                 }) 
                                   }
                           }
                             res.json({
                                               'message' : 'Post request succesfull , DB updated' 
                                           }) 
                  })

    module.exports = {  modelDataRouter}              