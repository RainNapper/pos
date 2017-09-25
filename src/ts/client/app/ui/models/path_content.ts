export interface IPathContent {
  name: string;
  items: ITarget[];
  bundles: ITarget[];
  categories: ITarget[];
}

export interface ITarget {
  id: string;
  name: string;
}