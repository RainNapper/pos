import { IMenu } from "../models/menu/menu";
import { IMenuTreeNode } from "../models/menu/menu_layout";

export const resolvePath = (menu: IMenu, path: string[]): IMenuTreeNode[] | undefined => {
  const nodes: (IMenuTreeNode | undefined)[] = path.map((id: string) => menu.layout.vertices.get(id));
  
  if (nodes.some((node) => node === undefined)) {
    return undefined; 
  }

  // Force cast to non-nullable array because we checked for null
  return nodes as IMenuTreeNode[];
}