import { Schema , Prop, SchemaFactory} from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type KahveDocument = HydratedDocument<Kahve>;

@Schema()
export class Kahve {
    @Prop()
    title: string;

    @Prop()
    img: string;

    @Prop()
    price: number;
}

export const KahveSchema = SchemaFactory.createForClass(Kahve);