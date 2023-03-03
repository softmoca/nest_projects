import { CatsService } from './cats.service';
import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
import { UseFilters, UseInterceptors } from '@nestjs/common/decorators';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { CatRequestDto } from './dto/cats.request.dto';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get() //현재 로그인을 한 고양이
  getCurrentCat() {
    return 'current cat';
  }

  @Post() //회원가입
  async signUp(@Body() body: CatRequestDto) {
    return await this.catsService.signUp(body);
  }

  @Post('login') //로그인
  logIn() {
    return 'login';
  }

  @Post('logout') //로그아웃
  logOut() {
    return 'logout';
  }

  @Post('upload/cats') //사진 올리기
  uploadCatImg() {
    return 'uploadImg';
  }
}
