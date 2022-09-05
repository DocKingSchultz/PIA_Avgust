import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let RegReq = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    type:{
        type: String, default:"reader"
    },
    name:{
        type: String
    },
    lastname:{
        type: String
    },
    address:{
        type: String
    },
    phone:{
        type:Number
    },
    email:{
        type:String
    },
    picture:{
        type:String
    },
    passwordConfirmed:{
        type:String
    } ,
    status:
    {
        type : String, default:'neaktivan'
    }
})

export default mongoose.model('RegReq', RegReq, 'regReq');