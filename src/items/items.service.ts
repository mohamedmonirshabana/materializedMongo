import { Injectable } from '@nestjs/common';
import { Items } from './interface/items.interface';
import { CreateItemdto } from './dto/creat.items.deto';
import { ITEM_TABLE } from '../common/connects';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import path from 'path';


@Injectable()
export class ItemsService {
    constructor(@InjectModel(ITEM_TABLE) private _Model: Model<Items>){}


    async GenerateData(){
        await this._Model.insertMany([
            {
                "name":"IMac p700",
                "price": 1500 ,
                "parent": "/computer",
                "category":"/item/electronic/computer/pc",
                "details":"New PC from Apple  "
            },
            {
                "name":"Dell Smart Serise 3000",
                "price": 1200 ,
                "parent": "/computer",
                "category":"/item/electronic/computer/pc",
                "details":"New PC from Dell Company  "
            },
            {
                "name":"TOSHIBA satellite P770",
                "price": 1800 ,
                "parent": "/computer",
                "category":"/item/electronic/computer/laptop",
                "details":"Cor I7   "
            },
            {
                "name":"GetWay X 900",
                "price": 1950 ,
                "parent": "/computer",
                "category":"/item/electronic/computer/laptop",
                "details":"Cor I7 RAM 32 GB   "
            },
            {
                "name":"S6",
                "price": 950 ,
                "parent": "/Mobile",
                "category":"/item/electronic/Mobile/iphone",
                "details":"New Iphone "
            },
            {
                "name":"X",
                "price": 1000 ,
                "parent": "/Mobile",
                "category":"/item/electronic/Mobile/iphone",
                "details":"New Smart phone "
            },
            {
                "name":"Note20",
                "price": 1000 ,
                "parent": "/Mobile",
                "category":"/item/electronic/Mobile/Samsung",
                "details":"New Smart phone "
            },
            {
                "name":"Galaxy s 70",
                "price": 900 ,
                "parent": "/Mobile",
                "category":"/item/electronic/Mobile/Samsung",
                "details":"New Smart phone "
            },
            {
                "name":"Galaxy s 70",
                "price": 900 ,
                "parent": "/Mobile",
                "category":"/item/electronic/Mobile/Samsung",
                "details":"New Smart phone "
            },
            {
                "name":"Java How to program",
                "price": 250 ,
                "parent": "/Computer",
                "category":"/item/Books/Computer/Programming",
                "details":"All For Java "
            },
            {
                "name":"C# Compelete Referance",
                "price": 250 ,
                "parent": "/Computer",
                "category":"/item/Books/Computer/Programming",
                "details":"All For C# "
            },
            {
                "name":"JavaScript MacGrow Hell",
                "price": 250 ,
                "parent": "/Computer",
                "category":"/item/Books/Computer/Programming",
                "details":"All For JavaScript "
            },
            {
                "name":"SQL server Scott",
                "price": 250 ,
                "parent": "/Computer",
                "category":"/item/Books/Computer/DB",
                "details":"All For SQL server "
            },
            {
                "name":"Mongo Cluster",
                "price": 250 ,
                "parent": "/Computer",
                "category":"/item/Books/Computer/DB",
                "details":"All For Mongo "
            }
            
            
        ]);
    }

    async insertData (itemDto : CreateItemdto): Promise<Items>{
        // const it: Items = itemDto;
       return await this._Model.create(itemDto);
    }

    async insertMany (itemDto: CreateItemdto[]): Promise<Items[]>{
        return await this._Model.insertMany(itemDto);
    }

    public async findByID(id: string): Promise<boolean> {
        const result = await  this._Model.findById(id);
        if(result !== null){
            return true;
        }
        return false;
    }

    async updateData(id: string,  data: Items): Promise<boolean>{
        return await this._Model.updateOne({_id: id}, data);
    }
    public async deleteItem(id: string): Promise<Items>  {
        return await this._Model.findByIdAndDelete({_id: id});
    }

    //find item
    public async findParent(word: string): Promise<Items[]>{
        const queryword =   "/"+word;            //"/^\/"+word+"$/";
        // console.log("the Rsult is ", queryword);
        return await this._Model.find({parent: {$regex: queryword } });
        // console.log("T is ", T);
        // return T;
    }

    //get all under paretn
    public async findallunderParent(parent: string): Promise<Items[]>{
        const queryword= "/"+parent+"";
        // console.log("the result is ",queryword);
        //{ name: { $regex: /acme.*corp/i, $nin: [ 'acmeblahcorp' ] } }
        return await this._Model.find({category: {  $regex: parent }});
    }


}
