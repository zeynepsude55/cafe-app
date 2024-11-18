import { Module } from "@nestjs/common";
import { kahveController } from "./kahve.controller";
import { Kahve, KahveSchema } from "./schemas/kahve.schemas";
import { KahveService } from "./kahve.service";
import { MongooseModule } from "@nestjs/mongoose";
 

@Module({
    imports: [MongooseModule.forFeature([{name: Kahve.name, schema: KahveSchema}])],
    controllers: [kahveController],
    providers: [KahveService],
})
export class KahveModule {}