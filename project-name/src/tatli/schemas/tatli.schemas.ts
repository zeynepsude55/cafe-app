import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TatliDocument = HydratedDocument<tatli>;

@Schema()
export class tatli {
    @Prop()
    title: string;

    @Prop()
    img: string;

    @Prop()
    price: number;
}

export const TatliSchema = SchemaFactory.createForClass(tatli);