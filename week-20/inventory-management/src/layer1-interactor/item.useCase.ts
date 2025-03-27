import { IItemRepository } from "../interfaces/ItemRepository.interface";
import { Item } from "../entities/item.entity";

export class ItemUseCase {
    constructor(private ItemRepository: IItemRepository) {}

    async createItem(
        name: string,
        description: string,
        quantity: number,
        price: number
    ) {
        let newItem = new Item(
            Date.now().toString(),
            name,
            description,
            quantity,
            price
        );
        return this.ItemRepository.create(newItem);
    }

    async getAllItems(limit?: number, offSet?: number) {
        return this.ItemRepository.getAllItems(limit, offSet);
    }

    async getItem(id: string) {
        return this.ItemRepository.getItemById(id);
    }

    async updateItem(id: string, item: Partial<Item>) {
        return this.ItemRepository.update(id, item);
    }

    async deleteItem(id: string) {
        return this.ItemRepository.delete(id);
    }
}
