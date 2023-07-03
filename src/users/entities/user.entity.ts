import { IsEmail, IsEnum, IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { Gender } from "../enums/gender";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsNotEmpty()
  name: string;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column({ type: "enum", enum: Gender, default: Gender.OTHERS })
  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;
}
