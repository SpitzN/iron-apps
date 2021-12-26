/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class GetAppsAgeDto {
  @IsString()
  age: string | number;
}

export class GetAppsRatingDto {
  @IsString()
  rating: number | string;
}

// dto for categories
export class GetAppsCategoriesDto {
  @IsString()
  categories: string[];
}
