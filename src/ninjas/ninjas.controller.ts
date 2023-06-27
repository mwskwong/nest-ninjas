import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";

@Controller("ninjas")
export class NinjasController {
  @Post()
  create(@Body() createNinjaDto: object) {
    // return this.ninjasService.create(createNinjaDto);
  }

  @Get()
  findBy(@Query() query: object) {
    // return this.ninjasService.findAll();
    return [query];
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    //  return this.ninjasService.findOne(+id);
    return { id };
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateNinjaDto: object) {
    // return this.ninjasService.update(+id, updateNinjaDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    // return this.ninjasService.remove(+id);
  }
}
