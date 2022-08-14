"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Reader = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    type: {
        type: String
    },
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    picture: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Reader', Reader, 'reader');
//# sourceMappingURL=reader.js.map