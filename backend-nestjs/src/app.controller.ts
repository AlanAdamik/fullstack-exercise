import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { appointments } from './appointments';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // THIS IS AN EXAMPLE OF A GET ENDPOINT WITH AN OPTIONAL QUERY PARAMETER
  @Get()
  getHello(@Query('name') name: string): string {
    return this.appService.getHello(name);
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
