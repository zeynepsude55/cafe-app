import { Controller , Get , Param , Post , Body , Put , Delete  } from "@nestjs/common";
import { CreatePersonDto } from "./dto/create.menu.dto";
import { MenuService } from "./menu.service";
import { Menu } from "./Schemas/menu.schemas";

@Controller("menu") 
export class MenuController {
    constructor(private menuService: MenuService) {}
    
    @Get()
    getAll() : Promise<Menu[]> {
        return this.menuService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id) : Promise<Menu> {
        return this.menuService.getOne(id);
    }

    @Post()
    create(@Body()  allProps: CreatePersonDto) : Promise<Menu> {
        return this.menuService.create(allProps);
    }

    @Put(':id')
    update(@Param('id') id, @Body() allProps: CreatePersonDto) : Promise<Menu> {
        return this.menuService.update(id, allProps);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Menu> {
        return this.menuService.remove(id);
}

}