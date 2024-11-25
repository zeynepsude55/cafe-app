import { Controller, Get, Param, Post, Body, Put , Delete} from "@nestjs/common";
import { CreatePersonDto } from "src/menu/dto/create.menu.dto";
import { TatliService } from "./tatli.service";
import { tatli } from './schemas/tatli.schemas';

@Controller('tatli')
export class TatliController {
  constructor(private tatliService: TatliService) {}

  @Get()
  getAll() : Promise<tatli[]> {
    return this.tatliService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id) : Promise<tatli> {
    return this.tatliService.getOne(id);
  }

    @Post()
    create(@Body() allProps: CreatePersonDto) : Promise<tatli> {
        return this.tatliService.create(allProps);
    }

    @Put(":id")
    update(@Param("id") id, @Body() allprops: CreatePersonDto) : Promise<tatli> {
        return this.tatliService.update(id, allprops);
    }

    @Delete(':id')
    remove(@Param('id') id) : Promise<tatli> {
        return this.tatliService.remove(id);

    }
}