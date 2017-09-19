import { IOptionGroup } from './option';

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