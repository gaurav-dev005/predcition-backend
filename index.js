require("dotenv").config();
const express = require('express') ;
const { statusRouter } = require('./routes/status') ; //calling royte handlers
const {modelDataRouter} = require('./routes/modelData')
const app = express() ;
const { default: mongoose } = require('mongoose');
const cors = require('cors') ;

app.use(cors()) ;




//connecting with database
async function connectDB(){
      try{ 
             console.log(process.env.DB_CONNECTION_STRING)
             await mongoose.connect(process.env.DB_CONNECTION_STRING) ;
           
             console.log('DB connected')
      }
      catch(err){
             console.log('could not connect with database' + err.message) ;
      }
}
connectDB() ;




//routing
app.use(express.json()) ;


app.use('/api/v1/status' , statusRouter) ; //frontend calls
app.use('/api/v1/model' , modelDataRouter) ; //model post request endpoint handler to update prediciton data periodically

app.listen(3184, "0.0.0.0", () => {

});
