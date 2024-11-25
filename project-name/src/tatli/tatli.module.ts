import { Module } from "@nestjs/common";
import { TatliController } from "./tatli.controller";
import { TatliService } from "./tatli.service";
import { MongooseModule } from "@nestjs/mongoose";
import { tatli, TatliSchema } from "./schemas/tatli.schemas";


@Module({
    imports: [MongooseModule.forFeature([{name: tatli.name, schema: TatliSchema}])],
    controllers: [TatliController],
    providers: [TatliService],
})
export class TatliModule {}