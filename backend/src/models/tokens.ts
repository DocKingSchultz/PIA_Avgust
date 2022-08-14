import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let Token = new Schema({
    creator: {
        type: String
    },
    key: {
        type: String
    }
})

export default mongoose.model('Token', Token, 'tokens');