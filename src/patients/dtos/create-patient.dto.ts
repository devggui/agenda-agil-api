import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreatePatientDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string  

  @ApiProperty()
  @IsNotEmpty()
  surname: string  

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty()
  @IsNotEmpty()  
  birthDate: Date

  @ApiProperty()
  @IsNotEmpty()
  cellphone: string  

  @ApiProperty()
  @IsOptional()
  phone: string  

  @ApiProperty()
  @IsOptional()
  cep: string  

  @ApiProperty()
  @IsNotEmpty()
  address: string  

  @ApiProperty()
  @IsNotEmpty()
  number: string  

  @ApiProperty()
  @IsOptional()
  complement: string  

  @ApiProperty()
  @IsNotEmpty()
  neighborhood: string  

  @ApiProperty()
  @IsNotEmpty()
  city: string  

  @ApiProperty()
  @IsNotEmpty()
  state: string  
}
