//import { createCat, updatePartialCat } from './../../../../letsStart/src/cats/cats.service';
import { CatsService } from "./cats.service";
import { Controller, HttpException } from "@nestjs/common";
import {
  Delete,
  Get,
  Patch,
  Post,
  UseFilters,
  UseInterceptors,
} from "@nestjs/common/decorators";
import { HttpExceptionFilter } from "src/common/exceptions/http-exception.filter";
import { SuccessInterceptor } from "src/common/interceptors/success.interceptor";

@Controller("cats")
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    console.log("controller hi");
    return { cats: "get all cat api" };
  }

  @Get(":id")
  getOneCat() {
    return "one cat";
  }

  @Post()
  createCat() {
    return "update cat";
  }

  @Patch(":id")
  updatePartialCat() {
    return "updates";
  }

  @Delete(":id")
  deleteCat() {
    return "delete service";
  }
}
