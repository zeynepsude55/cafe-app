import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { KahveDocument, Kahve } from './schemas/kahve.schemas';
import { Model } from "mongoose";
import { CreatePersonDto } from "./dto/create.kahve.dto";


@Injectable()
export class KahveService {
    constructor(@InjectModel(Kahve.name) private kahveModel: Model<KahveDocument>) {}
   

    async getAll(): Promise<Kahve[]> {
        return await this.kahveModel.find();
    }

    async getOne(id: string) : Promise<Kahve> {
        return await this.kahveModel.findById(id);
    }
 
    async create(allProps: CreatePersonDto) : Promise<Kahve> {
        const kahve = new this.kahveModel(allProps);
        return await kahve.save();
    }

    async update(id: string, allProps:CreatePersonDto) : Promise<Kahve> {
        return await this.kahveModel.findByIdAndUpdate(id, allProps, { new: true })
    }

    async remove(id: string) : Promise<Kahve> {
        return await this.kahveModel.findByIdAndDelete(id);
    }
    
}