const mongoose = require("mongoose")
const { stringify } = require("nodemon/lib/utils")

const schoolShema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    level:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    numOfStudents:{
        type:Number,
        require:true,
    },
    location:{
        type:String,
        require:true,
    },
    Address:{
     gps:String,
      box:String,
    },
    contact:{
        phone :String,
        fax:String,
        email:String,
    },

},{
    timestamps:true
})


const School =mongoose.model("school", schoolShema)
module.exports= school;