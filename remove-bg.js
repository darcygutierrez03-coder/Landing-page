import { removeBackground } from "@imgly/background-removal-node";
import fs from "fs";

async function run() {
    try {
        console.log("Removing background...");
        const inputPath = "public/darcy.png";
        const blob = await removeBackground(inputPath);
        const buffer = Buffer.from(await blob.arrayBuffer());
        fs.writeFileSync("public/darcy.png", buffer);
        console.log("Background removed successfully!");
    } catch (e) {
        console.error("Error:", e);
    }
}
run();
