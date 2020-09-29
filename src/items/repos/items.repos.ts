// import { UpdateManyOptions } from 'mongodb';
import {  Model } from 'mongoose';
import { Items } from '../interface/items.interface';

// import { CreateItemdto } from '../dto/creat.items.deto';


export class ItemRepos {
    constructor(private _model: Model<Items>){}
    //insert 
    public async insertData(docs: Items): Promise<Items>{   
        return await this._model.create(docs);
    }

    //insert Many 
    public async insertMany(docs: Items[]): Promise<Items[]>{
        return await this._model.insertMany(docs);
    }

    //Find By ID 
    public async findByID(id: string): Promise<boolean> {
        const result = await  this._model.findById(id);
        if(result !== null){
            return true;
        }
        return false;
    }
    //update
    public async updateItem(id: string , docs: Items): Promise<boolean>{
        return await this._model.updateOne({_id: id}, docs);
        //  return true;
    }

    // delete

    public async deleteItem(id: string): Promise<Items>  {
        return await this._model.findByIdAndDelete({_id: id});
    }

    //find item
    public async findParent(word: string): Promise<Items[]>{
        // const Par = this._model.getSisterDB("catalog").categorise;
        // var col = db.getSisterDB("catalog").categories;
        // var categories = col.find({parent: /^\/electronics$/});
        const queryword = "/^\/"+word+"$/";
        return await this._model.find({parent: queryword});
    }

    //get all under paretn
    public async findallunderParent(parent: string): Promise<Items[]>{
        const queryword= "/^\/"+parent+"/";
        return await this._model.find({parent: queryword});
    }

}