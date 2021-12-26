import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('iron-apps')
export class AppController {
  constructor(public appService: AppService) {}

  @Get('random/')
  randomThreeApps(
    @Query('age') age: string,
    @Query('rating') rating: string,
    @Query('categories') categories: string,
  ) {
    const categoriesArray = categories.split(',');
    const ratingNumber = parseInt(rating, 10);
    const ageNumber = parseInt(age, 10);
    const data = this.appService.getRandomApps(
      ageNumber,
      ratingNumber,
      categoriesArray,
    );

    if (!data) {
      throw new NotFoundException('No Iron Apps found for your criteria');
    }
    return data;
  }
}
