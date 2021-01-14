import { Controller, Get, HttpStatus, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthService, Provider } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get('/facebook/callback')
  @UseGuards(AuthGuard('facebook'))
  async facebookLoginCallback(@Req() req: Request): Promise<any> {
    const jwt: string = await this.authService.validateOauthLogin(
      req.user,
      Provider.FACEBOOK,
    );
    return {
      data: {
        jwt,
      },
    };
  }

  @Get('/google')
  @UseGuards(AuthGuard('google'))
  async googleLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get('/google/callback')
  @UseGuards(AuthGuard('google'))
  async googleLoginCallback(@Req() req: Request): Promise<any> {
    const jwt: string = await this.authService.validateOauthLogin(
      req.user,
      Provider.GOOGLE,
    );
    return {
      data: {
        jwt,
      },
    };
  }
}
