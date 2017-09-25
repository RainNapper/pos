export interface IItem {
  id: string;
  name: string;
  optionGroupIds: string[];
}

export interface IItemGroup {
  id: string;
  itemIds: string[];
  minSize: number;
  maxSize?: number;
}

export interface IOption {
  id: string;
  name: string;
}

export interface IOptionGroup {
  id: string;
  name: string;
  optionIds: string[];
  minSize: number;
  maxSize?: number;
} 

export interface IBundle {
  id: string;
  name: string;
  templateId: string;
  itemId: string;
}

export interface IBundleTemplate {
  id: string;
  choiceIds: string[];
}

export type ICategory = string;
