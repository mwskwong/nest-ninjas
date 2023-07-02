import { PartialType } from "@nestjs/mapped-types";

import { CreateNinjaDto } from "./create-ninja-dto";

export class FindByNinjaDto extends PartialType(CreateNinjaDto) {}
