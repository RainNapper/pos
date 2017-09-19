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