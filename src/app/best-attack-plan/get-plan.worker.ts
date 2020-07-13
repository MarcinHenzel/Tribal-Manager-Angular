/// <reference lib="webworker" />
import * as moment from 'moment';
import {Order} from '../shared/models';

interface InputData {
  data: any;
  sourceArr: any[];
  targetArr: any[];
}
addEventListener('message', ({ data: {sourceArr, targetArr, coordsForm} }) => {
  postMessage(JSON.stringify(pickBestSet(sourceArr, targetArr)));
  function pickBestSet(sourceArr, targetArr) {
    let bestApproach = {
      orders: [],
      points: 0
    };
    for (let i = 0; i < 20000; i++) {
      (sourceArr as string[]).sort(() => Math.random() - 0.5);
      (targetArr as string[]).sort(() => Math.random() - 0.5);
      const approach = createOrders(sourceArr, targetArr);
      if (bestApproach.points < approach.points) {
        bestApproach = {
          orders: approach.orders,
          points: approach.points
        };
      }
    }
    return bestApproach.orders;
  }


  function createOrders(sourceArr, targetArr) {
    const approach = { orders: [], points: 0 };
    for (let i = 0; i < sourceArr.length; i++) {
      const distance = countDistance(sourceArr[i], targetArr[i]);
      const ms = Math.floor(distance * coordsForm.unit * 60 * 1000);
      const timeAttack = moment(new Date(coordsForm.destinationTime)).subtract(ms, 'ms');

      const obj: Order = {
        from: sourceArr[i],
        to: targetArr[i],
        distance,
        ms,
        timeAttack,
        sleepTime: inSleepTime(timeAttack.hour())
      };
      if (!obj.sleepTime) {
        approach.points++;
      }
      approach.orders.push(obj);
    }
    return approach;
  }
  function inSleepTime(hour: number) {
    const from = coordsForm.sleepFrom;
    const to = coordsForm.sleepTo;
    let midnightPast = true;
    if (from > to) {
      midnightPast = false;
    }
    for (let i = from; i < to || midnightPast === false; i++) {
      if (i === 24) {
        midnightPast = true;
        i = 0;
      }
      if (i === hour) {
        return true;
      }
    }
    return false;
  }
  function countDistance(cord1Str, cord2Str) {
    const cord1 = {
      x: parseInt(cord1Str[0] + cord1Str[1] + cord1Str[2], 10),
      y: parseInt(cord1Str[4] + cord1Str[5] + cord1Str[6], 10)
    };
    const cord2 = {
      x: parseInt(cord2Str[0] + cord2Str[1] + cord2Str[2], 10),
      y: parseInt(cord2Str[4] + cord2Str[5] + cord2Str[6], 10)
    };
    return Math.sqrt((Math.pow((cord2.x - cord1.x), 2) + Math.pow((cord2.y - cord1.y), 2)));
  }
});
