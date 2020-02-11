import { ItemService } from './item.service';
import { Item } from './item.interface';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemService);
    findAll(): Promise<Item[]>;
    create(createItemDto: Item): Promise<Item>;
    delete(params: any): Promise<Item[]>;
    getItem(params: any): Promise<Item>;
    getLastID(tmp: string, last: string): Promise<number>;
    editItem(params: any, item: Item): Promise<Item[]>;
}
