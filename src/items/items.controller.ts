import { Body, Controller, Delete, Get, Param, Post, } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemdto } from './dto/creat.items.deto';
import { Items } from './interface/items.interface';
import { itemSchema } from './schemas/items.schema';

import {
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
    @ApiResponse({status:200, description: "Done" })
    async Additems( @Body()itemDataDto: CreateItemdto ):Promise<Items>{
        return await this._ItemsService.insertData(itemDataDto);
    }


    //return Data 
    @Get('getparent')
    @ApiOperation({summary: "get parent ",})
    @ApiResponse({status:200, description: "Done"})
    async getParentonly(@Body('word') body: string): Promise<Items[]>{
        const result = body;
        // console.log("Hello ", result);
        return await this._ItemsService.findParent(result);
        // console.log(Res); 
        // return Res;
    }

    @Get('getallchild')
    @ApiOperation({summary: "get All under Parent"})
    @ApiResponse({status:200, description: "Done"})
    async getallunderParent(@Body('word') body: string):Promise<Items[]>{
        console.log("welcome to My World", body);
        return await this._ItemsService.findallunderParent(body);
    }

    // return All Data under Parent

    // Delete
    // @Delete(':id')
    // @ApiOperation({summary: "Delete Item from DB"})
    // @ApiResponse({status:200, description: "Done"})
    // async deleteParent(@Param()id: string) : Promise<Items> {
    //     return await this._ItemsService.deleteItem(id);
    // }


    // @Get('test/:par')
    // async testFunc(@Param()par): Promise<string>{
    //     return "Hello Group "+ par;
    // }

    //Update
    // @Put(':id')
    // async updateItem(@Param()id: string,  @Body()itemDataDto: CreateItemdto): Promise<Items>{
    //     await this._ItemsService.updateData(id,itemDataDto);
    // }

}
