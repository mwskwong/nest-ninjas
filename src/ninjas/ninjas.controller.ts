import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";

import { CreateNinjaDto } from "./dto/create-ninja-dto";
import { UpdateNinjaDto } from "./dto/update-ninja-dto";
import { NinjasService } from "./ninjas.service";

@Controller("ninjas")
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Post()
  create(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.create(createNinjaDto);
  }

  @Get()
  findBy(@Query() query: object) {
    // TODO: apply filtering
    return this.ninjasService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.ninjasService.findOne(+id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjasService.update(+id, updateNinjaDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.ninjasService.remove(+id);
  }
}
