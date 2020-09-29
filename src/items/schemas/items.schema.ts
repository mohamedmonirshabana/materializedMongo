import { Schema, Types } from 'mongoose';


export const itemSchema: Schema = new Schema({
    _id: {type: Types.ObjectId , required: true , unique: true},
    name:{type: String, required: true},
    price: {type: Number, required: true},
    parent: {type: String, required: true},
    category:{type: String, required: true},
    details:{type: String, required: false}
}, {timestamps: true});