import { Item } from "../entities/item.entity";

export interface IItemRepository {
    create(item: Item): Promise<Item>;
    getItemById(id: string): Promise<Item | null>;
    getAllItems(limit?: number, offSet?: number): Promise<Item[]>;
    update(id: string, item: Partial<Item>): Promise<Item | null>;
    delete(id: string): Promise<boolean>;
}
