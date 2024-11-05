import { Controller, Get , Param , Post , Body , Put , Delete } from "@nestjs/common";
import { CreatePersonDto } from "./dto/cretae.users.dto";
import { UsersServices } from './users.service';
import { User } from "./Schemas/users.schemas";


@Controller("users")
export class UsersController {
    constructor(private UsersService: UsersServices) {}

    @Get()
    getAll(): Promise<User[]> {  
        return this.UsersService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id) : Promise<User> {
        return this.UsersService.getOne(id)
    }

    @Post()
    create(@Body() allProps: CreatePersonDto) : Promise<User> { 
        return this.UsersService.create(allProps);
    }

    @Put(':id')
    update(@Param('id') id, @Body() allProps: CreatePersonDto) : Promise<User> {
        return this.UsersService.update(id, allProps)
    }

    @Delete(':id')
    remove(@Param('id') id) : Promise<User> {
        return this.UsersService.remove(id)
    }
    
}