import { AppAction } from "client/app/store/actions/actions";
import { Reducer } from "redux";
import { IMenu, addSingletonOrderableUnsafe } from "shared/models/menu/menu";
import { ICategory, IItem, ICustomChoice, ICustomization, IOrderable, IComponent, IChoice } from "shared/models/menu/menu_elements";
import { IMenuLayout, IMenuTreeNode } from "shared/models/menu/menu_layout";

export type IMenuStoreState = IMenu;
const DEFAULT_STATE: IMenuStoreState = buildMenu();

export const menuReducer: Reducer<IMenuStoreState> = (
  state: IMenuStoreState = DEFAULT_STATE,
  action: AppAction): IMenuStoreState => {
  switch (action.type) {
    default: return state;
  }
};

function buildMenu(): IMenu {
  const baseMenu: IMenu = {
    layout: buildLayout(),
    categories: buildCategories(),
    items: new Map<string, IItem>(),
    orderables: new Map<string, IOrderable>(),
    components: new Map<string, IComponent>(),
    choices: new Map<string, IChoice>(),
    customizations: new Map<string, ICustomization>(),
    customChoices: new Map<string, ICustomChoice>(),
  };
  addSingletonOrderableUnsafe(baseMenu, "3", "o1", "c1", "ch1", "i1", "Nachos");
  addSingletonOrderableUnsafe(baseMenu, "4", "o2", "c2", "ch2", "i2", "Chicken Parmagiana");
  addSingletonOrderableUnsafe(baseMenu, "4", "o3", "c3", "ch3", "i3", "Rotisserie Chicken");
  addSingletonOrderableUnsafe(baseMenu, "5", "o4", "c4", "ch4", "i4", "Swordfish");
  return baseMenu;
}

function buildLayout(): IMenuLayout {
  return {
    rootNodeId: "1",
    vertices: new Map<string, IMenuTreeNode>([
      ["1", { id: "1", }],
      ["2", { id: "2", }],
      ["3", { id: "3", }],
      ["4", { id: "4", }],
      ["5", { id: "5", }],
    ]),
    edges: new Map<string, string[]>([
      ["1", ["2", "3"]],
      ["2", ["4", "5"]],
      ["3", []],
      ["4", []],
      ["5", []],
    ]),
  };
}

function buildCategories(): Map<string, ICategory> {
  return new Map<string, ICategory>([
    ["1", "Root"],
    ["2", "Entrees"],
    ["3", "Appetizers"],
    ["4", "Chicken"],
    ["5", "Seafood"],
  ]);
}