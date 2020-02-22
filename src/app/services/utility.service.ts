import { IVillage } from './../interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  unitsSpeed: object = {
    spear: 16.6667,
    sword: 20.3667,
    axe: 6.6667,
    archer: 16.6667,
    spy: 8.3333,
    light: 9.2667,
    mount: 9.2667,
    heavy: 10.1833,
    ram: 27.7833,
    catapult: 27.7833,
    paladin: 9.26667,
    noble: 32.4,
  }
  constructor() { }
  isPlayer(text: string): boolean {
    if (text.length === 7 && text[3] === '|') {
      return false;
    } else {
      return true;
    }
  }
  isInNobleRange(vil1: IVillage, vil2: IVillage): boolean {
    const distance = Math.sqrt((Math.pow((vil2.x - vil1.x), 2) + Math.pow((vil2.y - vil1.y), 2)));
    return distance <= 100;
  }
  transformToCoords(text) {
    const target = text.split('|');
    const x = parseInt(target[0], 10) as number;
    const y = parseInt(target[1], 10) as number;
    return { x, y };
  }
  countDistance(cord1Str, cord2Str) {
    const cord1 = {
      x: parseInt(cord1Str[0] + cord1Str[1] + cord1Str[2], 10),
      y: parseInt(cord1Str[4] + cord1Str[5] + cord1Str[6], 10)
    }
    const cord2 = {
      x: parseInt(cord2Str[0] + cord2Str[1] + cord2Str[2], 10),
      y: parseInt(cord2Str[4] + cord2Str[5] + cord2Str[6], 10)
    }
    return Math.sqrt((Math.pow((cord2.x - cord1.x), 2) + Math.pow((cord2.y - cord1.y), 2)));
  }
}
