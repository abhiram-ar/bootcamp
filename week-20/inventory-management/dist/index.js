"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.json({ messge: "hi" });
});
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
//# sourceMappingURL=index.js.map