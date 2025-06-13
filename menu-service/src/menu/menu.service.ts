import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class MenuService {
  constructor(@InjectModel("MenuItem") private menuModel: Model<any>) {}

  async create(data: any) {
    const newItem = new this.menuModel(data);
    return newItem.save();
  }

  async findAll() {
    return this.menuModel.find().exec();
  }

  async findByRestaurant(restaurantId: string) {
    return this.menuModel.find({ restaurantId }).exec();
  }

  async update(id: string, data: any) {
    return this.menuModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string) {
    return this.menuModel.findByIdAndDelete(id).exec();
  }
}
