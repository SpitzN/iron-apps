// import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
const GIST_ID = 'd1cd6b8a65a0d242a522b8fa12ca0304';

@Injectable()
export class AppService {
  constructor(
    public appRepository: AppRepository,
    private httpService: HttpService,
  ) {}

  getRandomApps(age: number, rating: number, categories: string[]) {
    const apps = this.httpService
      .get(`https://api.github.com/gists/${GIST_ID}`)
      .pipe(map((response) => response.data.files['apps.json'].content))
      .pipe(
        map((content) =>
          JSON.parse(content).filter((app) => {
            return (
              app.min_age <= age &&
              app.rating >= rating &&
              categories.some((category) => app.category.includes(category))
            );
          }),
        ),
      )
      .pipe(
        map((filteredApps) =>
          filteredApps.sort(() => 0.5 - Math.random()).slice(0, 3),
        ),
      );
    return apps;
  }

  // getAllApps() {
  //   return this.appRepository.getAllApps();
  // }

  // getRandomApps(age: number, rating: number, categories: string[]) {
  //   return this.appRepository.getRandomThreeApps(age, rating, categories);
  // }
}
