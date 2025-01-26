import { Controller, Get } from "@nestjs/common";

@Controller({})
export class TaskController { 
    
    // Method get in tasks.
    @Get('/tasks')
    getAllTask(){
        // Functions and logic
        return 'Getting all tasks'
    }

    // @Get('/')
    // index(){
    //     return 'Start page'
    // }
}