import {COLUMNS, ROWS} from './map';

export const level = [
  {
    buffer: {width: 2, height: 1},
    map: [
      {x: 0, y: 15, w: 6, h: 17},
      {x: 6, y: 20, w: 7, h: 12},
      {x: 40, y: 24, w: 6, h: 2},
      {x: COLUMNS * 2 - 10, y: 13, w: 10, h: 2},
      {x: 13, y: 26, w: COLUMNS * 2, h: 6}
    ],
    items: [
      {x: COLUMNS * 2 - 5, y: 24, color: {r: 255, g: 102, b: 0}},
    ],
    boxes: [
      {x: COLUMNS * 2 - 16, y: 20, color: {r: 113, g: 107, b: 107}}
    ],
    obstacles: [
      {x: COLUMNS * 2 - 30, y: 26, color: {r: 0, g: 0, b: 0}}
    ],
    portal: {x: COLUMNS * 2 - 4, y: 10, color: 'pink'},
    startPoint: {x:500, y: 0}
  },
  {
    buffer: {width: 2, height: 2},
    map: [
      {x: 0, y: 0, w: 4, h: ROWS * 2},
      {x: 4, y: 22, w: 4, h: 2},
      // {x: 4, y: 38, w: 8, h: 4, color: 'red'},
      {x: 12, y: 0, w: 4, h: 28},
      {x: 12, y: 32, w: 4, h: 14},
      {x: 16, y: 0, w: 8, h: 24},
      {x: 16, y: 34, w: 36, h: 12},
      {x: 27, y: 27, w: 4, h: 2},
      {x: 32, y: 22, w: 4, h: 2},
      {x: 37, y: 17, w: 4, h: 2},
      {x: 31, y: 12, w: 4, h: 2},
      {x: 24, y: 7, w: 4, h: 2},
      {x: 43, y: 0, w: 5, h: 28},
      {x: 48, y: 0, w: 4, h: 34},
      {x: 32, y: 54, w: 7, h: 2},
      {x: 0, y: 56, w:  COLUMNS * 2, h: 8},

    ],
    items: [],
    boxes: [],
    obstacles: [
      {x: 28, y: 54, color: {r: 100, g: 240, b: 90}}
    ],
    portal: {x: COLUMNS * 2 - 4, y: 8, color: 'pink'},
    startPoint: {x:500, y: 0}
  }
];