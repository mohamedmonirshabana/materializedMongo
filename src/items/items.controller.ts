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

    @Get('generate')
    async Generate(): Promise<string>{
        await this._ItemsService.GenerateData();
        return "Data Genrate";
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
    @Delete('delete')
    @ApiOperation({summary: "Delete Item from DB"})
    @ApiResponse({status:200, description: "Done"})
    async deleteParent(@Body('itemid')itemid: string) : Promise<Items> {
        return await this._ItemsService.deleteItem(itemid);
    }

    //Update
    // @Put()
    // async updateItem(@Body()itemDataDto: CreateItemdto): Promise<Items>{
    //     const id = itemDataDto.id;
    //     await this._ItemsService.updateData(id,itemDataDto);
    // }

}
