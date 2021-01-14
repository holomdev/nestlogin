import { Module } from '@nestjs/common';
import { FacebookStrategy } from './facebook.strategy';
import { GoogleStrategy } from './google.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [FacebookStrategy, GoogleStrategy, AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
