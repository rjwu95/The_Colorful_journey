import {COLUMNS} from './map';

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
    portal: {x: COLUMNS * 2 - 4, y: 10, color: 'pink'}
  },
  {
    map: [
    {x: 0, y: 26, w: COLUMNS * 2, h: 6},
    ],
    items: [],
    boxes: [],
    portal: {x: COLUMNS * 2 - 4, y: 8, color: 'pink'}
  }
];