import { IMenu } from "shared/models/menu/menu";
import { IMenuLayout, IMenuTreeNode, IMenuTreeData } from "shared/models/menu/menu_layout";
import { IItem, IItemGroup } from 'shared/models/menu//item';
import { IBundle, IBundleTemplate } from 'shared/models/menu//bundle';
import { IOption, IOptionGroup } from 'shared/models/menu//option';
import { Reducer } from "redux";
import { AppAction } from "app/store/actions/actions";

export type IMenuStoreState = IMenu;
const DEFAULT_STATE: IMenuStoreState = buildMenu();

export const menuReducer: Reducer<IMenuStoreState> = (
  state: IMenuStoreState = DEFAULT_STATE,
  action: AppAction): IMenuStoreState => {
  switch (action.type) {
    default: return state;
  }
}

function buildMenu(): IMenu {
  return {
    layout: buildLayout(),
    items: new Map<string, IItem>(),
    itemGroups: new Map<string, IItemGroup>(),
    bundles: new Map<string, IBundle>(),
    bundleTemplates: new Map<string, IBundleTemplate>(),
    options: new Map<string, IOption>(),
    optionGroups: new Map<string, IOptionGroup>(),
  }
}

function buildLayout(): IMenuLayout {
  return {
    rootNodeId: '1',
    edges: new Map<string, string[]>([
      ['1',['2','3']],
      ['2',['4','5']],
      ['3',[]]
    ]),
    vertices: new Map<string, IMenuTreeNode>([
      ['1', {
        id: '1',
        name: 'Root'
      }],
      ['2', {
        id: '2',
        name: 'Entrees'
      }],
      ['3', {
        id: '3',
        name: 'Appetizers'
      }],
      ['4', {
        id: '4',
        name: 'Chicken' 
      }],
      ['5', {
        id: '5',
        name: 'Seafood'
      }]
    ]),
  }
}