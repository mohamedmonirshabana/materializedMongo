import { Document } from 'mongoose';

export interface Items extends Document{
    name: string;
    price: number;
    category: string;
    details: string;
}