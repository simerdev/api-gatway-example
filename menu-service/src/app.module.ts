import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://simrweb:CGoi0NPWdnRSxCJ9@capstone.kecu3f3.mongodb.net/menu'),
    MenuModule,
  ],
})
export class AppModule {}
