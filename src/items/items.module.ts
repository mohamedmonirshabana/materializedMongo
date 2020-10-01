import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ITEM_TABLE } from '../common/connects';
import { itemSchema } from './schemas/items.schema';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';

@Module({
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: ITEM_TABLE, schema: itemSchema
                }
            ])
    ],
    providers: [
        ItemsService
    ],
    controllers: [
        ItemsController
    ],
    exports: [
        ItemsService
    ]
})
export class ItemsModule { }
