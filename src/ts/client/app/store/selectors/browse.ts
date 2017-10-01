import { IRootStoreState } from "client/app/store/reducers/root";
import { IPathContent, ITarget } from "client/app/ui/models/path_content";
import { IBundle, ICategory, IItem } from "shared/models/menu/menu_elements";
import { IMenuTreeNode } from "shared/models/menu/menu_layout";

export const getCurrentPathTargets = (state: IRootStoreState): ITarget[] => {
  const currentPath = state.browse.path;
  return currentPath.map((id) => {
    return {
      id,
      name: state.menu.categories.get(id)!,
    };
  });
};

export const getCategoryContents = (state: IRootStoreState): IPathContent => {
  const menu = state.menu;
  const menuLayout = menu.layout;
  const path = state.browse.path;
  const current = path[path.length - 1];
  const currentNode = menuLayout.vertices.get(current);
  if (currentNode === undefined) {
    throw new Error("Current category doesn't exist?!");
  }
  const children = menuLayout.edges.get(current)!;

  const categories: ITarget[] = children.map(
    (nodeId) => {
      return {
        id: nodeId,
        name: menu.categories.get(nodeId)!,
      };
    });

  let items: ITarget[] = [];
  let bundles: ITarget[] = [];
  if (currentNode.data !== undefined) {
    items = currentNode.data.itemIds.map((itemId) => buildTargetFromMenuElement(state.menu.items.get(itemId)!));
    bundles = currentNode.data.bundleIds.map((bundleId) => buildTargetFromMenuElement(state.menu.bundles.get(bundleId)!));
  }

  return {
    name: menu.categories.get(currentNode.id)!,
    categories,
    items,
    bundles,
  };
};

const buildTargetFromMenuElement = (node: IItem | IBundle): ITarget => {
  return {
    id: node.id,
    name: node.name,
  };
};
