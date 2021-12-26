import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { AppService } from './app.service';

//https://gist.github.com/orgoldfus/d1cd6b8a65a0d242a522b8fa12ca0304

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

  //  **_**_**_**_**_**_**_**_**_**_**_**_**_**_**_**_**_ **_**_**_**_**_**_**_**_**_**_**_**_**_**_**_**_**_ **_**_**_**_**_**_**_**_**_**_**
  // get request to fetch all the apps from service

  // @Get()
  // async getAllApps() {
  //   return await this.appService.getAllApps();
  // }

  // get request to fetch filtered apps from the apps from service
  // @Get('random/')
  // async randomThreeApps(
  //   @Query('age') age: string,
  //   @Query('rating') rating: string,
  //   @Query('categories') categories: string,
  // ) {
  //   const categoriesArray = categories.split(',');
  //   const ratingNumber = parseInt(rating, 10);
  //   const ageNumber = parseInt(age, 10);

  //   const data = await this.appService.getRandomApps(
  //     ageNumber,
  //     ratingNumber,
  //     categoriesArray,
  //   );
  //   if (data.length === 0) {
  //     throw new NotFoundException('No Iron Apps found for your criteria');
  //   }

  //   return data;
  // }
}
