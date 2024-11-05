import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User , UserDocument } from "./Schemas/users.schemas";
import { CreatePersonDto } from "./dto/cretae.users.dto";

@Injectable()
export class UsersServices {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async getAll(): Promise<User[]> {
        return await this.userModel.find();
    }

    async getOne(id: string): Promise<User> {
        return await this.userModel.findById(id)
    }

    async create(allProps: CreatePersonDto) : Promise<User> {
        const user = new this.userModel(allProps);
        return await user.save();
    }

    async update(id: string, allProps: CreatePersonDto) : Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, allProps, { new: true });
    }

    async remove(id: string) : Promise<User> {
        return await this.userModel.findByIdAndDelete(id);
    }
}