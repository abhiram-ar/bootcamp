import { Request, Response } from "express";
import { ItemUseCase } from "../../layer1-interactor/item.useCase";

export class ItemController {
    constructor(private itemInteractor: ItemUseCase) {}

    async createItem(req: Request, res: Response):Promise<any> {
        try {
            const { name, description, quantity, price } = req.body;
            const data = await this.itemInteractor.createItem(
                name,
                description,
                quantity,
                price
            );
            return res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async getAllItem(req: Request, res: Response) {
        try {
            const data = await this.itemInteractor.getAllItems();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async getItem(req: Request, res: Response) {
        try {
            const { id } = req.body;
            const data = await this.itemInteractor.getItem(id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.body;
            const deleted = await this.itemInteractor.deleteItem(id);
            res.status(200).json({ staus: deleted ? true : false });
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }


    // todo: update controller
}
