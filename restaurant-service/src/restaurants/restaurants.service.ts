import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant, RestaurantDocument } from './restaurant.schema';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: Model<RestaurantDocument>,
  ) {}

  async getRestaurants(): Promise<Restaurant[]> {
    return this.restaurantModel.find().exec();
  }

  async createRestaurant(data: Partial<Restaurant>): Promise<Restaurant> {
    const newRestaurant = new this.restaurantModel(data);
    return newRestaurant.save();
  }
}
