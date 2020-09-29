import { Schema } from 'mongoose';


export const itemSchema: Schema = new Schema({
    name:{type: String, required: true},
    price: {type: Number, required: true},
    parent: {type: String, required: true},
    category:{type: String, required: true},
    details:{type: String, required: false}
}, {timestamps: true});