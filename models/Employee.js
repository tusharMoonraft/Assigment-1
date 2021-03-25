const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const employeesSchema=new Schema({
    firstname:{
        type: String, 
        isUnique: true, 
        isRequired: true,
        

        
    },
    lastname:{
        type: String,  isRequired: true, 
        
    },
    
    email:{
        type: String,  isRequired: true 
        
    },
    password:{
        type: String,  isRequired: true
    },
    img:{
        type:Buffer,  isRequired: true
    },
    imgType:{
        type:String, isRequired: true
    }
})



 module.exports=mongoose.model('employeeResitration',employeesSchema)