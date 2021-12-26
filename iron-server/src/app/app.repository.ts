/* eslint-disable prettier/prettier */
import { readFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppRepository {
  async getAllApps() {
    const data = await readFile('./apps.json', 'utf8');
    const apps = JSON.parse(data);
    return apps;
  }

  async getRandomThreeApps(age: number, rating: number, categories: string[]) {
    console.log(age, rating, categories);
    const data = await readFile('./apps.json', 'utf8');
    const apps = JSON.parse(data);
    const filteredApps = apps.filter((app) => {
      return (
        app.min_age <= age &&
        app.rating >= rating &&
        categories.some((category) => app.category.includes(category))
      );
    });

    const randomTopThree = filteredApps
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    return randomTopThree;
  }
}
