import { IMenuLayout } from 'shared/models/menu/menu_layout';
import { ICategory, ICustomChoice, ICustomization, IItem, IChoice, IComponent, IOrderable } from 'shared/models/menu/menu_elements';

export interface IMenu {
  layout: IMenuLayout;
  categories: Map<string, ICategory>;
  orderables: Map<string, IOrderable>;
  components: Map<string, IComponent>;
  choices: Map<string, IChoice>;
  items: Map<string, IItem>;
  customizations: Map<string, ICustomization>;
  customChoices: Map<string, ICustomChoice>;
}

export const buildEmptyMenu = (layout: IMenuLayout): IMenu => {
  return {
    layout,
    categories: new Map<string, ICategory>(),
    orderables: new Map<string, IOrderable>(),
    components: new Map<string, IComponent>(),
    choices: new Map<string, IChoice>(),
    items: new Map<string, IItem>(),
    customizations: new Map<string, ICustomization>(),
    customChoices: new Map<string, ICustomChoice>(),
  }
}

export const addSingletonOrderableUnsafe =
  (menu: IMenu, categoryId: string, orderableId: string, componentId: string, choiceId: string, itemId: string, name: string) => {
    const item: IItem = {
      id: itemId,
      name,
      customizations: [],
    }
    const choice: IChoice = {
      id: choiceId,
      items: [itemId],
    };
    const component: IComponent = {
      id: componentId,
      choices: [choiceId],
    }
    const orderable: IOrderable = {
      id: orderableId,
      name: `${name} Orderable`,
      components: [componentId],
    }

    menu.items.set(itemId, item);
    menu.choices.set(choiceId, choice);
    menu.components.set(componentId, component);
    menu.orderables.set(orderableId, orderable);

    const category = menu.layout.vertices.get(categoryId)!;
    if (category.orderables === undefined) {
      category.orderables = [];
    }
    category.orderables.push(orderableId);

    console.log(menu);
  }