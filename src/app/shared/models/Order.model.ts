import { Moment } from 'moment';
export interface Order {
  from: string;
  to: string;
  distance: number;
  ms: number;
  timeAttack: Moment;
  sleepTime: boolean;
}
