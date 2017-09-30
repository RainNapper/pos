import { AppAction } from "client/app/store/actions/actions";
import { Reducer } from "redux";
import { IMenu } from "shared/models/menu/menu";
import { IBundle, IBundleTemplate, ICategory, IItem, IItemGroup, IOption, IOptionGroup} from "shared/models/menu/menu_elements";
import { IMenuLayout, IMenuTreeData, IMenuTreeNode } from "shared/models/menu/menu_layout";

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
  return {
    layout: buildLayout(),
    categories: buildCategories(),
    items: buildItems(),
    itemGroups: new Map<string, IItemGroup>(),
    bundles: new Map<string, IBundle>(),
    bundleTemplates: new Map<string, IBundleTemplate>(),
    options: new Map<string, IOption>(),
    optionGroups: new Map<string, IOptionGroup>(),
  };
}

function buildLayout(): IMenuLayout {
  return {
    rootNodeId: "1",
    edges: new Map<string, string[]>([
      ["1", ["2", "3"]],
      ["2", ["4", "5"]],
      ["3", []],
      ["4", []],
      ["5", []],
    ]),
    vertices: new Map<string, IMenuTreeNode>([
      ["1", { id: "1" }],
      ["2", { id: "2" }],
      ["3", { id: "3" }],
      ["4", {
        id: "4",
        data: {
          itemIds: ["i1", "i2"],
          bundleIds: [],
        },
      }],
      ["5", {
        id: "5",
        data: {
          itemIds: ["i3", "i4"],
          bundleIds: [],
        },
      }],
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

function buildItems(): Map<string, IItem>{
  return new Map<string, IItem>([
    ["i1", {
      id: "i1",
      name: "Chicken Parmagiana",
      optionGroupIds: [],
    }],
    ["i2", {
      id: "i2",
      name: "Chicken Masala",
      optionGroupIds: [],
    }],
    ["i3", {
      id: "i3",
      name: "Swordfish",
      optionGroupIds: [],
    }],
    ["i4", {
      id: "i4",
      name: "Salmon Steak",
      optionGroupIds: [],
    }],
  ]);
}
