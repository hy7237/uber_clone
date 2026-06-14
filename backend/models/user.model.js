const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({
    fullname:
    {
        firstname:
        {
            type:String,
            required:true,
            minlength:[3,'First name must be at least 3 characters']
        },
        lastname:
        {
            type:String,
          
            minlength:[3,'Last name must be at least 3 characters']
        }
    },
    email:
    {
        type:String,
        required:true,
        unique:true,
        minlength:[5,'email must be of 5 characters']
    },
    password:
    {
        type:String,
        required:true,
        select:false
    },
    sockedId://server uses this as unique identifier to share or track the live location of driver and user
    {
        type:String,
       
    },
})

userSchema.methods.generateAuthToken=function()//create json token for authentication purpose
{
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
}

userSchema.methods.comparePassword=async function(password)//this method compare hash or bcrypt password for each user
{
    return await bcrypt.compare(password,this.password);
}
userSchema.statics.hashPassword=async function(password)//this methods use to encrypt the password before saving
{
    return await bcrypt.hash(password,10);
}

//diff between static and methods
//methods works on one user object
//statics works on model itself and no user object needed here

const userModel=mongoose.model('user',userSchema);
module.exports=userModel;