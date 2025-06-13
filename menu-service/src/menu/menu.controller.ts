import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from "@nestjs/common";
import { MenuService } from "./menu.service";

@Controller("menu")
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() body: any) {
    return this.menuService.create(body);
  }

  @Get()
  findAll() {
    return this.menuService.findAll();
  }

  @Get("restaurant/:id")
  findByRestaurant(@Param("id") id: string) {
    return this.menuService.findByRestaurant(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() body: any) {
    return this.menuService.update(id, body);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.menuService.delete(id);
  }
}
