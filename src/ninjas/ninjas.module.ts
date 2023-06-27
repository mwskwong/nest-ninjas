import { Module } from "@nestjs/common";

import { NinjasController } from "./ninjas.controller";
import { NinjasService } from "./ninjas.service";

@Module({
  providers: [NinjasService],
  controllers: [NinjasController],
})
export class NinjasModule {}
