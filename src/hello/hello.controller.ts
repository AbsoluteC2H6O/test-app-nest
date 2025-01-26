import { Controller, Get } from '@nestjs/common';

// Functino to execute to generate an URL
@Controller('')
export class HelloController {

    @Get('/')
    index(){
        return 'Home page'
    }
}
