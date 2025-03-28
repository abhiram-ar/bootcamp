import { Item } from "../../layer0-domain/entities/item.entity";
import { IItemRepository } from "../../layer0-domain/interfaces/ItemRepository.interface";
import itemModel from "../database/models/item.model";

export class MongoDBRepository implements IItemRepository {
    async create(item: Item): Promise<Item> {
        const newItem = new itemModel(item);
        await newItem.save();
        return new Item(
            newItem.id,
            newItem.name,
            newItem.description,
            newItem.quantity,
            newItem.price
        );
    }

    async getItemById(id: string): Promise<Item | null> {
        let item = await itemModel.findById(id);
        return item
            ? new Item(item.id, item.name, item.description, item.quantity, item.price)
            : null;
    }

    async getAllItems(limit?: number, offSet?: number): Promise<Item[]> {
        let items = await itemModel.find();
        return items.map(
            (item) => new Item(item.id, item.name, item.description, item.quantity, item.price)
        );
    }

    async update(id: string, item: Partial<Item>): Promise<Item | null> {
        try {
            let updatedItem = await itemModel.findByIdAndUpdate(id, item, {
                new: true,
            });
            return updatedItem
                ? new Item(
                      updatedItem.id,
                      updatedItem.name,
                      updatedItem.description,
                      updatedItem.quantity,
                      updatedItem.price
                  )
                : null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async delete(id: string): Promise<boolean> {
        try {
            let itemDeleted = await itemModel.findByIdAndDelete(id);
            return itemDeleted ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
