import express from "express";
import { ItemController } from "../controllers/item.controller";
import { ItemUseCase } from "../../layer1-interactor/item.useCase";
import { MongoDBRepository } from "../../layer2-infrastructure/repository/item.mongoDB.repository";
let itemRouter = express.Router();

const itemRepository = new MongoDBRepository();
const itemInteractor = new ItemUseCase(itemRepository);
const itemController = new ItemController(itemInteractor);

itemRouter.get("/", itemController.getAllItem);
itemRouter.get("/:itemId", itemController.getItem);
itemRouter.post("/create", itemController.createItem.bind(itemController));
itemRouter.delete("/:itemId", itemController.delete);
itemRouter.put("/:itemId", itemController.update);

export default itemRouter;
