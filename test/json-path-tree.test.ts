import { getPathTree } from "../src";

const mockJson = {
  a: { b: [{ c: 3 }] }
}

test('package main method simeple snapshot test', () => {
  const tree = getPathTree(mockJson)
  expect(tree).toMatchSnapshot();
});