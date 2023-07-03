import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from "@nestjs/common";
import { EntityNotFoundError, QueryFailedError } from "typeorm";

import { CreateUserDto } from "./dto/create-user.dto";
import { FindByUserDto } from "./dto/find-by-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  // TODO: check for duplicated name and email
  async create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    try {
      return await this.usersService.create(createUserDto);
    } catch (e) {
      if (e instanceof QueryFailedError) {
        // console.log(e);
        throw new ConflictException();
      }
    }
  }

  @Get()
  findBy(@Query(new ValidationPipe()) findByUserDto: FindByUserDto) {
    return this.usersService.findBy(findByUserDto);
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    try {
      return await this.usersService.findOne(id);
    } catch (e) {
      if (e instanceof EntityNotFoundError) throw new NotFoundException();
    }
  }

  @Patch(":id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body(new ValidationPipe()) updateUserDto: UpdateUserDto
  ) {
    try {
      return await this.usersService.update(id, updateUserDto);
    } catch (e) {
      if (e instanceof EntityNotFoundError) throw new NotFoundException();
    }
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    try {
      return await this.usersService.remove(id);
    } catch (e) {
      if (e instanceof EntityNotFoundError) throw new NotFoundException();
    }
  }
}
