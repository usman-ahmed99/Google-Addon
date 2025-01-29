import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddOnController } from './add-on/add-on.controller';

@Module({
  imports: [],
  controllers: [AppController, AddOnController],
  providers: [AppService],
})
export class AppModule {}
