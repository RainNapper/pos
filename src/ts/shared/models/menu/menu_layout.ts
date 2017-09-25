// Assert that key set of edges and vertices are identical
// Assert that rootNodeId is in keyset of both edges and vertices.
export interface IMenuLayout {
  rootNodeId: string;
  edges: Map<string, string[]>;
  vertices: Map<string, IMenuTreeNode>
}

export interface IMenuTreeNode {
  id: string;
  data?: IMenuTreeData;
}

export interface IMenuTreeData {
  itemIds: string[];
  bundleIds: string[];
}