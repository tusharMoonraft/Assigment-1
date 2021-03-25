const mongoose=require('mongoose');


const Schema=mongoose.Schema;


const imageSchema=new Schema({
    
    img:{
        type:Buffer,  isRequired: true
    },
    imgType:{
        type:String, isRequired: true
    }
})


module.exports=mongoose.model('Image',imageSchema);
