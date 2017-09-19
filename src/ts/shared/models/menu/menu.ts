import { IMenuLayout } from './menu_layout';
import { IItem, IItemGroup } from './item';
import { IBundle, IBundleTemplate } from './bundle';
import { IOption, IOptionGroup } from './option';

export interface IMenu {
  layout: IMenuLayout;
  items: Map<string, IItem>
  itemGroups: Map<string, IItemGroup>;
  bundles: Map<string, IBundle>;
  bundleTemplates: Map<string, IBundleTemplate>;
  options: Map<string, IOption>;
  optionGroups: Map<string, IOptionGroup>;
}
