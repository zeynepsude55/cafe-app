import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type MenuDocument = HydratedDocument<Menu>;

@Schema()
export class Menu {
    @Prop()
    kahveAdi: string;

    @Prop()
    fiyat: number;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);