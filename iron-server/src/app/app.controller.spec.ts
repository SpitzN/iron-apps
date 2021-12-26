import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepository } from './app.repository';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [AppController],
      providers: [AppService, AppRepository],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Sanity Check, Hello World!"', () => {
      expect(appController.getHello()).toBe('Sanity Check, Hello World!');
    });
  });

  describe('randomThreeApps', () => {
    it('should return 3 random apps', () => {
      expect(
        appController.randomThreeApps(
          '3',
          '6',
          'Entertainment,News%20And%20Magazines,Shopping',
        ),
      ).toBe(3);
    });
  });
});
