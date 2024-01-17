# json-path-tree
## 介绍
从json对象中生成极简的json路径树
## 安装
pnpm add -D vite-node json-path-tree
## 使用
```sh
json-path-tree -i path/to/input-file -o path/to/output-file
```
## 示例
```
input-file: a: { b: [{ c: 3 }] }
output-file: {
  "a": {
    "b": {
      "c": null,
    },
  },
}
```
 