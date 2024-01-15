import { readFile, writeFile } from "fs/promises";
import { argv, path } from "zx";
import { getPathTree } from "../src/utils/json-path-tree";

const inputPath = path.resolve(argv.i)
const outputPath = path.resolve(argv.o)
const jsonStr = await readFile(inputPath, 'utf-8')
const json = JSON.parse(jsonStr)
const pathTree = getPathTree(json)
const pathTreeStr = JSON.stringify(pathTree, null, 2)
await writeFile(outputPath, pathTreeStr)
