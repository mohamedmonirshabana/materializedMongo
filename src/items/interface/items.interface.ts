import { Document } from 'mongoose';

export interface Items extends Document{
    _id:string;
    name: string;
    price: number;
    category: string;
    details: string;
}