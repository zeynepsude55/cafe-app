import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { tatli, TatliDocument } from './schemas/tatli.schemas';
import { InjectModel } from "@nestjs/mongoose";
import { CreatePersonDto } from "src/menu/dto/create.menu.dto";

@Injectable()
export class TatliService {
    constructor(@InjectModel(tatli.name) private tatliModel: Model<TatliDocument>) {}

    async getAll(): Promise<tatli[]> {
        return await this.tatliModel.find();
    }

    async getOne(id: string): Promise<tatli> {
        return await this.tatliModel.findById(id);
    }

    async create(allProps: CreatePersonDto): Promise<tatli> {
        const tatli = new this.tatliModel(allProps);
        return await tatli.save();
    }

    async update(id: string, allProps: CreatePersonDto): Promise<tatli> {
        return await this.tatliModel.findByIdAndUpdate(id, allProps, { new: true });
    }

    async remove(id: string): Promise<tatli> {
        return await this.tatliModel.findByIdAndDelete(id);
    }
}
