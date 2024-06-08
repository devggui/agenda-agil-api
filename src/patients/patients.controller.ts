import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dtos/create-patient.dto';
import { UpdatePatientDto } from './dtos/update-patient.dto';
import { User } from "@prisma/client";

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  create(
    @Body() createPatientDto: CreatePatientDto,
    @Request() req: { currentUser: User }
  ) {
    return this.patientsService.create(createPatientDto, req.currentUser.id);
  }

  @Get()
  findAll(@Request() req: { currentUser: User }) {
    return this.patientsService.findAll({
      where: {
        userId: req.currentUser.id
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientsService.remove(id);
  }
}
