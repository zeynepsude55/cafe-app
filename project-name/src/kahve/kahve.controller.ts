import { Controller, Get, Param , Post, Body, Put, Delete} from "@nestjs/common";
import { CreatePersonDto } from "./dto/create.kahve.dto";
import { KahveService } from './kahve.service';
import { Kahve } from "./schemas/kahve.schemas";

@Controller('kahve')
export class kahveController {
    constructor(private KahveService: KahveService) {}


    @Get()
    getAll() : Promise <Kahve[]> {
        return this.KahveService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id) : Promise <Kahve> {
        return this.KahveService.getOne(id);
    }

    @Post()
    create(@Body() allProps: CreatePersonDto) : Promise <Kahve> {
        return this.KahveService.create(allProps)
    }

    @Put(":id")
    update(@Param("id") id, @Body() allProps: CreatePersonDto) : Promise <Kahve> {
        return this.KahveService.update(id, allProps);
    }

    @Delete(":id")
    remove(@Param("id") id) : Promise <Kahve> {
        return this.KahveService.remove(id);
    }
}