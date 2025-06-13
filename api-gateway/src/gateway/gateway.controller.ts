import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { logger } from '../common/logger';

@Controller()
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Get('restaurants')
  getAllRestaurants() {
    logger.info('GatewayController: get restaurants Received request');
    return this.gatewayService.getAllRestaurants();
  }

  @Post('restaurants')
  createRestaurant(@Body() body: any) {
    logger.info('GatewayController: body restaurants Received request');
    return this.gatewayService.createRestaurant(body);
  }

  @Get('menu/restaurant/:id')
  getMenuByRestaurant(@Param('id') id: string) {
    logger.info('GatewayController: body restaurants Received request');
    return this.gatewayService.getMenuByRestaurant(id);
  }

  @Post('menus')
  createMenu(@Body() body: any) {
    return this.gatewayService.createMenu(body);
  }
}
