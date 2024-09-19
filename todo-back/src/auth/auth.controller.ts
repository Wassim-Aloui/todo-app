import { Controller, Post, Body, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userDto } from './dto/user.dto';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() body:userDto) {
    return this.authService.register(body.email, body.password);
  }

  @Post('login')
  async login(@Body() body:userDto) {
    return this.authService.login(body.email, body.password);
  }

}
