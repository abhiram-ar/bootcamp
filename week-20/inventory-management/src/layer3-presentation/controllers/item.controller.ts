import { Request, Response } from "express";
import { ItemUseCase } from "../../layer1-interactor/item.useCase";

export class ItemController {
    constructor(private itemInteractor: ItemUseCase) {}

    async createItem(req: Request, res: Response): Promise<any> {
        try {
            const { name, description, quantity, price } = req.body;

            if (!name || !description || !quantity || !price) {
                return res
                    .status(400)
                    .json({ success: false, message: "Required parameter missing in request" });
            }

            if (price < 0) {
                return res
                    .status(400)
                    .json({ success: false, message: "price cannot be negative" });
            }

            const data = await this.itemInteractor.createItem(name, description, quantity, price);
            return res
                .status(201)
                .json({ success: true, message: "item created successfully", data });
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

    getAllItem = async (req: Request, res: Response) => {
        try {
            const data = await this.itemInteractor.getAllItems();
            res.status(200).json({ success: true, messsge: "item list fetched", data });
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    };

    getItem = async (req: Request, res: Response) => {
        try {
            const { itemId } = req.params;
            const data = await this.itemInteractor.getItem(itemId);
            res.status(200).json({
                success: true,
                message: "item details fetched sucessfully",
                data,
            });
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            const { itemId } = req.params;
            const deleted = await this.itemInteractor.deleteItem(itemId);
            res.status(200).json({ status: deleted ? true : false });
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    };

    update = async (req: Request, res: Response): Promise<any> => {
        try {
            const { itemId: id } = req.params;
            if (!id) {
                return res
                    .status(400)
                    .json({ success: false, message: "item id misisng in request header" });
            }

            const { name, description, quantity, price } = req.body;

            if (!name || !description || !quantity || !price) {
                return res
                    .status(400)
                    .json({ success: false, message: "Required parameter missing in request" });
            }

            if (price < 0) {
                return res
                    .status(400)
                    .json({ success: false, message: "price cannot be negative" });
            }

            let data = this.itemInteractor.updateItem(id, { name, description, quantity, price });
            res.status(203).json({ success: true, message: "item updated scccessfully", data });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal server error" });
        }
    };
}
