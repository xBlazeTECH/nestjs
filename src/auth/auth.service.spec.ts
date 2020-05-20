import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constants';
import { UsersModule } from 'src/users/users.module';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '60s' },
        }),
      ],
      providers: [AuthService, LocalStrategy, JwtStrategy]
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});
