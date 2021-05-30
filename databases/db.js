const mongoose=require("mongoose")


// const validator = require('validator');

const databaseName='waahiRegister';
mongoose.connect(`mongodb://localhost:27017/${databaseName}`, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex : true}).then(()=>{console.log(`mongoose is successfully connected and name of database is ${databaseName}`)}).catch(()=>{console.log('erroe coccuered on mongoose connection ')});