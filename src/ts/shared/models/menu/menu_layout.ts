export interface IMenuLayout {
  rootNodeId: string;
  edges: Map<string, string[]>;
  vertices: Map<string, IMenuTreeNode>
}

export interface IMenuTreeNode {
  id: string;
  name: string;
  data?: IMenuTreeData;
}

export interface IMenuTreeData {
  itemIds: string[];
  bundleIds: string[];
}