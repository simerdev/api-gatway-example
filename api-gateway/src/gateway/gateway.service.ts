import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { SERVICES } from '../config/services.config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GatewayService {
  constructor(private readonly http: HttpService) {}

  async getAllRestaurants() {
    const res = await firstValueFrom(
      this.http.get(`${SERVICES.RESTAURANT_SERVICE_URL}/restaurants`),
    );
    return res.data;
  }

  async createRestaurant(data: any) {
    const res = await firstValueFrom(
      this.http.post(`${SERVICES.RESTAURANT_SERVICE_URL}/restaurants`, data),
    );
    return res.data;
  }

  async getMenuByRestaurant(id: string) {
    const res = await firstValueFrom(
      this.http.get(`${SERVICES.MENU_SERVICE_URL}/menu/restaurant/${id}`),
    );
    return res.data;
  }

  async createMenu(data: any) {
    const res = await firstValueFrom(
      this.http.post(`${SERVICES.MENU_SERVICE_URL}/menu`, data),
    );
    return res.data;
  }
}
