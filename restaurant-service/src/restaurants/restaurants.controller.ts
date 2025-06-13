import { Body, Controller, Get, Post } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant.schema';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Get()
  async getAllRestaurants(): Promise<Restaurant[]> {
    return this.restaurantsService.getRestaurants();
  }

  @Post()
  async createRestaurant(
    @Body() restaurantData: Partial<Restaurant>,
  ): Promise<Restaurant> {
    return this.restaurantsService.createRestaurant(restaurantData);
  }
}
