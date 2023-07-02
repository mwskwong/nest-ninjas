import { Injectable } from "@nestjs/common";

import { CreateNinjaDto } from "./dto/create-ninja-dto";
import { FindByNinjaDto } from "./dto/find-by-ninja-dto";
import { UpdateNinjaDto } from "./dto/update-ninja-dto";
import { Ninja } from "./entities/ninja.entity";
import { Element } from "./enums/Element";

@Injectable()
export class NinjasService {
  // TODO: Connect this to real DB
  private dummyNinjas: Ninja[] = [
    { id: 0, name: "Naruto", clan: "Uzumaki", element: Element.Wind },
    { id: 1, name: "Sasuke", clan: "Uchiha ", element: Element.Lightning },
  ];

  create(createNinjaDto: CreateNinjaDto) {
    const maxId = Math.max(...this.dummyNinjas.map(({ id }) => id));
    const ninja = { id: maxId + 1, ...createNinjaDto };
    this.dummyNinjas.push(ninja);

    console.log(this.dummyNinjas);

    return ninja;
  }

  findAll() {
    return this.dummyNinjas;
  }

  findBy(findByNinjaDto: FindByNinjaDto) {
    return this.dummyNinjas.filter(
      ({ name, clan, element }) =>
        (!findByNinjaDto.name || name === findByNinjaDto.name) &&
        (!findByNinjaDto.clan || clan === findByNinjaDto.clan) &&
        (!findByNinjaDto.element || element === findByNinjaDto.element)
    );
  }

  findOne(id: number) {
    return this.dummyNinjas.find((ninja) => ninja.id === id);
  }

  update(id: number, updateNinjaDto: UpdateNinjaDto) {
    const index = this.dummyNinjas.findIndex((ninja) => ninja.id === id);
    if (index === -1) throw Error("Ninja not found");
    const ninja = { ...this.dummyNinjas[index], ...updateNinjaDto };
    this.dummyNinjas[index] = ninja;

    console.log(this.dummyNinjas);

    return ninja;
  }

  remove(id: number) {
    const index = this.dummyNinjas.findIndex((ninja) => ninja.id === id);
    if (index === -1) throw Error("Ninja not found");
    this.dummyNinjas.splice(index, 1);

    console.log(this.dummyNinjas);
  }
}
