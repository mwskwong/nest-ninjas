import { IsEmail, IsEnum } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { Gender } from "../enums/gender";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ type: "enum", enum: Gender, default: Gender.OTHERS })
  @IsEnum(Gender)
  gender: Gender;
}
