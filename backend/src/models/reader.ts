import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let Reader = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    type:{
        type: String
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
    }
})

export default mongoose.model('Reader', Reader, 'reader');