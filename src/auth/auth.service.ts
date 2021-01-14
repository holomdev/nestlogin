import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';

export enum Provider {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
}

@Injectable()
export class AuthService {
  private readonly JWT_SECRET = process.env.JWT_SECRET;

  async validateOauthLogin(user: any, provider: Provider): Promise<string> {
    try {
      /*
          Aqui debe ir la rutina de inserccion si es un usuario nuevo desde los
          providers listados arriba
       */

      const payload = {
        user,
        provider,
      };

      return sign(payload, this.JWT_SECRET, { expiresIn: 3600 });
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
