export interface ITable {
  id: string;
  number: number;
  seats: number;
  party?: IParty;
}

export interface IParty {
  size: number;
  phase: PartyPhase;
}

export enum PartyPhase {
  SEATED,
  ORDERED,
  CHECKING_OUT,
  CHECKED_OUT,
}