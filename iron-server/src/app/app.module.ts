import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AppRepository } from './app.repository';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, AppRepository],
})
export class AppModule {}
