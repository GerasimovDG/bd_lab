import { Item } from './item.interface';
export declare class ItemService {
    private items;
    findAll(): Item[];
    create(item: Item): void;
    deleteItem(id: number): void;
    getItem(id: number): Item;
    editItem(id: number, item: Item): void;
    getLastID(): number;
}
