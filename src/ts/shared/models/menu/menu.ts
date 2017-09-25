import { IMenuLayout } from './menu_layout';
import { IItem, IItemGroup, IBundle, IBundleTemplate, IOption, IOptionGroup, ICategory } from './menu_elements';

export interface IMenu {
  layout: IMenuLayout;
  categories: Map<string, ICategory>;
  items: Map<string, IItem>;
  itemGroups: Map<string, IItemGroup>;
  bundles: Map<string, IBundle>;
  bundleTemplates: Map<string, IBundleTemplate>;
  options: Map<string, IOption>;
  optionGroups: Map<string, IOptionGroup>;
}
