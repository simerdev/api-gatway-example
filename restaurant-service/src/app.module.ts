import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://simrweb:CGoi0NPWdnRSxCJ9@capstone.kecu3f3.mongodb.net/resturant',
    ),
    RestaurantsModule,
  ],
})
export class AppModule {}
