import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { MongooseModule } from '@nestjs/mongoose';
import { KahveModule } from './kahve/kahve.module';
import { TatliModule } from "./tatli/tatli.module";

@Module({
  imports: [
    MenuModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/NestJsTest'),
    KahveModule, TatliModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
