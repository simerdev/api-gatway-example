// src/menu/menu.schema.ts
import { Schema } from 'mongoose';

export const MenuItemSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  restaurantId: String,
});
