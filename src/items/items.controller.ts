import { Body, Controller, Delete, Get, Param, Post, } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemdto } from './dto/creat.items.deto';
import { Items } from './interface/items.interface';

import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags
  } from '@nestjs/swagger';

@ApiTags('items')
@Controller('items')
export class ItemsController {
    constructor(
        private readonly _ItemsService: ItemsService
    ){}

    //send Data 
    @Post('additem')
    @ApiOperation({summary: "add item to DB"})
    @ApiResponse({status:200, description: "Done"})
    async Additems( @Body()itemDataDto: CreateItemdto ):Promise<Items>{
        return await this._ItemsService.insertData(itemDataDto);
    }


    //return Data 
    @Get(':parent')
    @ApiOperation({summary: "get parent "})
    @ApiResponse({status:200, description: "Done"})
    async getParentonly(@Param()parent: string):Promise<Items[]>{
        return await this._ItemsService.findParent(parent);
    }

    @Get(':allparents')
    @ApiOperation({summary: "get All under Parent"})
    @ApiResponse({status:200, description: "Done"})
    async getallunderParent(@Param()allparents: string):Promise<Items[]>{
        return await this._ItemsService.findallunderParent(allparents);
    }

    // return All Data under Parent

    // Delete
    @Delete(':id')
    @ApiOperation({summary: "Delete Item from DB"})
    @ApiResponse({status:200, description: "Done"})
    async deleteParent(@Param()id: string) : Promise<Items> {
        return await this._ItemsService.deleteItem(id);
    }

    //Update
    // @Put(':id')
    // async updateItem(@Param()id: string,  @Body()itemDataDto: CreateItemdto): Promise<Items>{
    //     await this._ItemsService.updateData(id,itemDataDto);
    // }

}
