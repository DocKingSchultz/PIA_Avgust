import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let Moderator = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    type:{
        type: String
    }
})

export default mongoose.model('Moderator', Moderator, 'moderator');