import { CatsService } from './cats.service';
import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
import { UseFilters, UseInterceptors } from '@nestjs/common/decorators';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { CatRequestDto } from './dto/cats.request.dto';
import { ApiOperation } from '@nestjs/swagger/dist';
import { ApiResponse } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import { ReadOnlyCatDto } from './dto/cat.dto';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    private readonly authService: AuthService,
  ) {}
  @ApiOperation({ summary: '현재 고양이 가져오기' })
  @Get() //현재 로그인을 한 고양이
  getCurrentCat() {
    return 'current cat';
  }
  @ApiResponse({
    status: 500,
    description: 'Server Error...',
  })
  @ApiResponse({
    status: 200,
    description: '성공!',
    type: ReadOnlyCatDto,
  })
  @ApiOperation({ summary: '회원가입' })
  @Post() //회원가입
  async signUp(@Body() body: CatRequestDto) {
    return await this.catsService.signUp(body);
  }
  @ApiOperation({ summary: '로그인' })
  @Post('login') //로그인
  logIn(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogIn(data);
  }
  @ApiOperation({ summary: '로그아웃' })
  @Post('logout') //로그아웃
  logOut() {
    return 'logout';
  }
  @ApiOperation({ summary: '고양이 이미지 업로드' })
  @Post('upload/cats') //사진 올리기
  uploadCatImg() {
    return 'uploadImg';
  }
}
