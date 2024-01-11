import jsonSchemaGenerator from 'json-schema-generator';
import traverse from 'json-schema-traverse';
import _ from 'lodash-es';

interface TreeNode {
  [key: string]: TreeNode
}

export function getPathTree(Json: object): TreeNode {
  const Schema = jsonSchemaGenerator(Json);
  const paths = getEndPointPathsFromJsonSchema(Schema);
  const fieldConfig = paths2Tree(paths);
  return fieldConfig;
}

function paths2Tree(paths: string[]): TreeNode {
  const output: TreeNode = {};

  paths.map((path) => path
    .replace(/\/(properties|items)/g, '')
    .slice(1)
    .split('/')
    .join('.')
  ).map((path) => {
    _.set(output, path, null);
  });

  return output
}

function getEndPointPathsFromJsonSchema(jsonSchema: object): string[] {
  let path = '';
  const paths: string[] = [];

  traverse(jsonSchema, {
    cb: {
      pre: (_, jsonPtr) => {
        path = jsonPtr;
      },
      post: () => {
        if (path !== '') {
          paths.push(path);
          path = '';
        }
      },
    },
  });

  return paths
}

