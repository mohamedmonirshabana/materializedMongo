import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ITEM_TABLE } from '../common/connects';
import { itemSchema } from './schemas/items.schema';
import { ItemsService } from './items.service';
import { ItemRepos } from './repos/items.repos';
import { ItemsController } from './items.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{name: ITEM_TABLE, schema:itemSchema}]),
    ],
    providers:[
        ItemsService,
        ItemRepos
    ],
    controllers:[
        ItemsController
    ],
    exports:[
        ItemsService,
        ItemRepos
    ]
})
export class ItemsModule {}
