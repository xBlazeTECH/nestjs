import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CatsModule } from './cats/cats.module';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [CatsModule, AuthModule, UsersModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
