const mongoose=require('mongoose');

const blacklistTokenSchema=new mongoose.Schema({
    token:
    {
        type:String,
        required:true,
        unique:true
    },
    createdAt:
    {
        type:Date,
        dafault:Date.now,//logout token creation time
        expires:86400 //24 hours in second and delete the document after that from the database know as TTL

    }
});

module.exports=mongoose.model('BlacklistToken',blacklistTokenSchema);