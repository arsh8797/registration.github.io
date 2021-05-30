const mongoose=require("mongoose")
// 2->.schema(stracture of document):- a mongoose schema defines the stracture of documents,default values,validators etc..
// defining Schema.,
const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        minlength:[4,'min length should be 4']
        // match:
        // maxlength

    },
    lastname:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        minlength:[4,'min length should be 4']
        // match:
        // maxlength

    },
    // ctype:{
    //     type:String,
    //     enum:['node','fode','noend']
    // },
    // videos:{
    //     type:Number,
        
    //     validate(value){
    //         // here insted of 'values' u can write anything
    //         if(value < 0){
    //             throw new Error("videos should be greater then 0")
    //         }
    //     }
    // },
    // author:String,
    username:{
        type:String,
        // require:true,
        // unique:true,
        // validate(val){
        //     if(!validator.isEmail(val)){
        //             throw new Error("email is not valid ")
        //     }
        // }
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    zipcode:{
        type:Number
    },
    password:{
        type:String
    },
    cpassword:{
        type:String
    },
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

// 3>collection creation using Model:-with help of schema we will create models i.e creating models=ceating collections(here collection is cerated)
const Register=new mongoose.model('Waahix',userSchema)
// here 'playlist' is name of collection,it should be singular.it will be automtically converted to plular.and 'Playlist' is class.its should be pascal form.

// exporting the collection
module.exports=Register