import { IRootStoreState } from 'client/app/store/reducers/root';
import { ITarget, IPathContent } from 'client/app/ui/models/path_content';
import { IMenuTreeNode } from 'shared/models/menu/menu_layout';

export const getCurrentPathTargets = (state: IRootStoreState): ITarget[] => {
  if (state.browse === undefined) {
    throw "Browse state in undefined?!";
  }
  if (state.menu === undefined) {
    throw "Menu state is undefined?!";
  }

  const currentPath = state.browse.path;
  return currentPath.map((id) => buildTargetFromTreeNode(state.menu.layout.vertices.get(id)!));
}

export const getPathContents = (state: IRootStoreState): IPathContent => {
  if (state.browse === undefined) {
    throw "Browse state is undefined?!";
  }
  if (state.menu === undefined) {
    throw "Menu state is undefined?!";
  }
  const menuLayout = state.menu.layout;

  const path = state.browse.path;
  const current = path[path.length - 1];
  const currentNode = menuLayout.vertices.get(current);
  if (currentNode === undefined) {
    throw "Current category doesn't exist?!";
  }

  const children = menuLayout.edges.get(current);
  if (children === undefined) {
    throw "Current category doesn't have children?!";
  }
  
  const targets = children.map(
    (nodeId) => buildTargetFromTreeNode(menuLayout.vertices.get(nodeId)!));

  return {
    name: currentNode.name,
    targets
  };
}

const buildTargetFromTreeNode = (node: IMenuTreeNode): ITarget => {
  return {
    id: node.id,
    name: node.name,
  };
}