import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { appointments } from './appointments';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // THIS IS AN EXAMPLE OF A GET ENDPOINT
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // THIS IS AN EXAMPLE OF HOW TO HANDLE REQUESTS WITH PARAMS (HERE name)
  @Get('/hello/:name')
  getHelloName(@Param('name') name: string): string {
    return this.appService.getHello(name);
  }

  @Get('/appointments')
  getAppointments() {
    return appointments;
  }
}
