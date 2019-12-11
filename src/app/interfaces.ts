import { Moment } from 'moment';


export interface IVillage {
  x: number;
  y: number;
}
export interface IAllies {
  player: string;
  villages: Array<IVillage>;
}
export interface IOrder {
  from: string;
  to: string;
  distance: number;
  ms: number;
  timeAttack: Moment;
  sleepTime: boolean;
}
