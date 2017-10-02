export interface IPathContent {
  name: string;
  orderables: ITarget[];
  categories: ITarget[];
}

export interface ITarget {
  id: string;
  name: string;
}
