  /**
   * Map from OptionGroup ID to customer selected Option IDs
   */
type OptionGroupSelection = Map<string, string[]>;

export interface IItemSelection {
  itemId: string;
  optionSelections: OptionGroupSelection;
}

export interface IBundleSelection {
  bundleId: string;
  choiceSelections: IChoiceSelection[]; 
}

export interface IChoiceSelection {
  choiceId: string;
  itemSelections: IItemSelection[];
}
