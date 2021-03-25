const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const TeaserScehma=new Schema({
    teasertext:{
        type: String, 
        isUnique: true, 
        isRequired: true,
    },
    teaserdescription:{
        type: String,  isRequired: true, 
        
    },
});

module.exports=mongoose.model('TeaserData',TeaserScehma);



