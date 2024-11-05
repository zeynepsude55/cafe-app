import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Menu, MenuDocument } from "./Schemas/menu.schemas";
import { CreatePersonDto } from "./dto/create.menu.dto";

@Injectable()
export class MenuService {
    constructor(@InjectModel(Menu.name) private menuModel: Model<MenuDocument>) {}

    async getAll(): Promise<Menu[]> {
        return this.menuModel.find().exec();
    }

    async getOne(id: string): Promise<Menu> {
        const menu = await this.menuModel.findById(id).exec();
        if (!menu) {
            throw new NotFoundException(`Menu with ID ${id} not found`);
        }
        return menu;
    }

    async create(allProps: CreatePersonDto): Promise<Menu> {
        const menu = new this.menuModel(allProps);
        return menu.save();
    }

    async update(id: string, allProps: CreatePersonDto): Promise<Menu> {
        const updatedMenu = await this.menuModel.findByIdAndUpdate(id, allProps, { new: true }).exec();
        if (!updatedMenu) {
            throw new NotFoundException(`Menu with ID ${id} not found`);
        }
        return updatedMenu;
    }
    async remove(id: string): Promise<Menu | null> {
        console.log("Silinecek ID:", id);
        const menu = await this.menuModel.findByIdAndDelete(id).exec();
        if (!menu) {
            console.log("ID bulunamadı:", id);
            throw new NotFoundException(`Menu with ID ${id} not found`);
        }
        console.log("Silme işlemi başarılı:", menu);
        return menu;
    }
    
    
}
