const express = require('express') ;
const app = express() ;

const Router = express.Router ;

const adminRouter = Router() ;
const {adminSignup} = require('../middlewares/adminSignup') ;
const {adminLogin} = require ('../middlewares/adminLogin') ;
const { validateToken } = require('../middlewares/validateUser');

adminRouter.post('/signup' , adminSignup) ;
adminRouter.post('/login' , adminLogin ) ;
adminRouter.post('/validateUser' , validateToken) ;

module.exports = {
               adminRouter
}