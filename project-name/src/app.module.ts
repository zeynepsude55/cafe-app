import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MenuModule } from './menu/menu.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, MenuModule, MongooseModule.forRoot('mongodb://localhost:27017/NestJsTest')],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
