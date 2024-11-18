import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { MongooseModule } from '@nestjs/mongoose';
import { KahveModule } from './kahve/kahve.module';  

@Module({
  imports: [
    MenuModule,
    MongooseModule.forRoot('mongodb://localhost:27017/NestJsTest'),
    KahveModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
