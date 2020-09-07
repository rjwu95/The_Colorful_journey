import {COLUMNS, ROWS} from './map';

export const level = [
  {
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
    savePoints: [
      {x: 100, y: 26},
      {x: 500, y: 26},
      {x: 1000, y: 26},
    ],
    obstacles: [
      {x: COLUMNS * 2 - 30, y: 25, color: {r: 0, g: 0, b: 0}}
    ],
    portal: {x: COLUMNS * 2 - 4, y: 10, color: 'pink'}
  },
  {
    map: [
      {x: 0, y: 0, w: 6, h: ROWS * 2},
      {x: 5, y: 48, w: 4, h:4},
      {x: 9, y: 44, w: 4, h:8},
      {x: 13, y: 40, w: 4, h:12},
      {x: 17, y: 36, w: 4, h:16},
      {x: 21, y: 32, w: 4, h:20},
      {x: 25, y: 28, w: 4, h:24},
      {x: 29, y: 24, w: 4, h:28},
      {x: 33, y: 20, w: 4, h:32},
      {x: 0, y: 52, w:  COLUMNS * 2, h: 6},

    ],
    items: [],
    boxes: [],
    savePoints: [],
    obstacles: [],
    portal: {x: COLUMNS * 2 - 4, y: 8, color: 'pink'}
  }
];