import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/souqcom'),
    ItemsModule
  ],

})
export class AppModule { }
