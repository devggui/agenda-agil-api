import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [UsersModule, AuthModule, PatientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
