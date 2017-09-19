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