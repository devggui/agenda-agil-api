import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty } from "class-validator";

export class CreatePatientDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string  

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  birthDate: Date
}
