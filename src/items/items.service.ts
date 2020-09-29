import { Injectable } from '@nestjs/common';
import { ItemRepos } from './repos/items.repos';
import { Items } from './interface/items.interface';
import { CreateItemdto } from './dto/creat.items.deto';


@Injectable()
export class ItemsService {
    constructor(private readonly _item: ItemRepos){}

    // async insertData (itemDto : CreateItemdto): Promise<Items>{
    //     let itemsData: Items ;
    //     itemsData.collection(itemDto);
    //     await this._item.insertData(...itemDto);
    // }
}
