import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PatientsModule } from './patients/patients.module';
import { PrismaService } from "./prisma.service";

@Module({
  imports: [PatientsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
