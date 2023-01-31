require('dotenv').config();
const express=require("express");
const fileUpload = require('express-fileupload');
const cors = require('cors');




const app = express()


/***********************************
 *       All Middlewares
 **********************************/
app.use(cors());
app.use(express.json());
app.use(fileUpload());






/**************************************
 * import all routes
 *****************************************/
const CustomerRouter=require("./api/customer/customer.routes.js");
const DriverRouter=require("./api/driver/driver.routes.js");




app.get('/', function (req, res) {
  res.send('Hello World')
})



/**
 * All Routes(localhost:5000/api/) base url
 * */

app.use("/api/customer",CustomerRouter);
app.use("/api/driver",DriverRouter);






/*Server Initilization */
app.listen(5000,()=>{
  console.log(`Api Server Running on Port No : 5000`);
});

