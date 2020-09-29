import { Injectable } from '@nestjs/common';
// import { ItemRepos } from './repos/items.repos';
import { Items } from './interface/items.interface';
import { CreateItemdto } from './dto/creat.items.deto';
import { Model } from 'mongoose';


@Injectable()
export class ItemsService {
    constructor(private _Model: Model<Items>){}

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
        // const Par = this._model.getSisterDB("catalog").categorise;
        // var col = db.getSisterDB("catalog").categories;
        // var categories = col.find({parent: /^\/electronics$/});
        const queryword = "/^\/"+word+"$/";
        return await this._Model.find({parent: queryword});
    }

    //get all under paretn
    public async findallunderParent(parent: string): Promise<Items[]>{
        const queryword= "/^\/"+parent+"/";
        return await this._Model.find({parent: queryword});
    }


}
