//import { createCat, updatePartialCat } from './../../../../letsStart/src/cats/cats.service';
import { CatsService } from './cats.service';
import { Controller, HttpException } from '@nestjs/common';
import {
  Delete,
  Get,
  Patch,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common/decorators';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get()
  getCurrentCat() {
    //현재 로그인을 한 고양이
    return 'current cat';
  }

  @Post()
  async signUp(@Body() body: CatRequestDto) {
    //회원가입
    console.log(body);
    return 'signup';
  }

  @Post('login')
  logIn() {
    //로그인
    return 'login';
  }

  @Post('logout')
  logOut() {
    //로그아웃
    return 'logout';
  }

  @Post('upload/cats')
  uploadCatImg() {
    //사진 올리기
    return 'uploadImg';
  }
}
