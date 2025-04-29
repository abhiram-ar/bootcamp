import { unlink } from "node:fs/promises";

try {
    await unlink("./demo.ts");
    console.log("file deleted successfully");
} catch (error) {
    console.log("error while deletig file", error``);
}
