import { Module } from "@nestjs/common";
import { MenuController } from "./menu.controller";
import { MenuService } from "./menu.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Menu , MenuSchema} from "./Schemas/menu.schemas";

@Module({
    imports: [MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema }])],
    controllers: [MenuController],
    providers: [MenuService],
})

export class MenuModule {}