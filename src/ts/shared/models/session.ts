import { IItemSelection, IBundleSelection } from 'selection';

export interface ISession {
  id: string;
  creationTime: Date;
  closeTime?: Date;
  order: (IItemSelection | IBundleSelection)[];
}