import { Body, Controller, Delete, Get, Param, Post, } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemdto } from './dto/creat.items.deto';
import { Items } from './interface/items.interface';

@Controller('items')
export class ItemsController {
    constructor(
        private readonly _ItemsService: ItemsService
    ){}

    //send Data 
    @Post('additem')
    async Additems( @Body()itemDataDto: CreateItemdto ):Promise<Items>{
        return await this._ItemsService.insertData(itemDataDto);
    }


    //return Data 
    @Get(':parent')
    async getParentonly(@Param()parent: string):Promise<Items[]>{
        return await this._ItemsService.findParent(parent);
    }

    @Get(':allparents')
    async getallunderParent(@Param()allparents: string):Promise<Items[]>{
        return await this._ItemsService.findallunderParent(allparents);
    }

    // return All Data under Parent

    // Delete
    @Delete(':id')
    async deleteParent(@Param()id: string) : Promise<Items> {
        return await this._ItemsService.deleteItem(id);
    }

    //Update
    // @Put(':id')
    // async updateItem(@Param()id: string,  @Body()itemDataDto: CreateItemdto): Promise<Items>{
    //     await this._ItemsService.updateData(id,itemDataDto);
    // }

}
