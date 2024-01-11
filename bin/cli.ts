import { readFile, writeFile } from "fs/promises";
import { argv } from "zx";
import { getPathTree } from "../src/utils/json-path-tree";

const jsonStr = await readFile(argv.i, 'utf-8')
const pathTree = getPathTree(JSON.parse(jsonStr))
await writeFile(argv.o, JSON.stringify(pathTree, null, 2))
