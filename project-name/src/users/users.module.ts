// app.controller ı buraya eklicez.

import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersServices } from "./users.service";
import { User, UserSchema } from "./Schemas/users.schemas";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
    controllers: [UsersController],
    providers: [UsersServices],
})
export class UsersModule {}