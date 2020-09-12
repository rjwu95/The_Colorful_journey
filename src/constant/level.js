import {COLUMNS, ROWS, BACKGROUND_COLOR, BLOCK_WIDTH, BLOCK_HEIGHT} from './map';
import { makeRgbColor } from '../utils/utils';

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
      {x: COLUMNS * 2 - 30, y: 26}
    ],
    portal: {x: COLUMNS * 2 - 4, y: 10, color: 'pink'},
    startPoint: {x: 2, y: 6}
  },
  {
    buffer: {width: 2, height: 1},
    map: [
      {x: 25, y: 21, w: 1, h: 4, color: 'rgb(100, 0, 0)'},
      {x: 25, y: 20, w: 5, h: 1, color: 'rgb(100, 0, 0)'},
      {x: 0, y: 0, w: 4, h: ROWS},
      {x: 4, y: 25, w: COLUMNS * 2, h: 12},
      {x: 37, y: 20, w: 3, h: 5, color: 'rgb(200, 100, 0)'},
      {x: 45, y: 15, w: 3, h: 10},
      {x: 54, y: 15, w: 3, h: 10, color: 'rgb(100, 50, 200)'},
      {x: 63, y: 15, w: 3, h: 10},
      {x: 72, y: 15, w: 3, h: 10, color: 'rgb(100, 50, 200)'},
      {x: 81, y: 15, w: 3, h: 10},
    ],
    boxes: [
      {x: COLUMNS * 2 - 16, y: 19, color: {r: 160, g: 82, b: 45}}
    ],
    obstacles: [
      {x: 41, y: 25},
      {x: 49.5, y: 25},
      {x: 58.5, y: 25},
      {x: 67.5, y: 25},
      {x: 76.5, y: 25},
      {x: 84, y: 25},
      {x: 87.5, y: 25},
      {x: 91, y: 25},
    ],
    portal: {x: COLUMNS * 2 - 4, y: 9, color: 'pink'},
    startPoint: {x: 5, y: 15},
    items: [
      {x: 14, y: 23, color: {r:100, g:0, b: 0}},
      {x: 28, y: 23, color: {r:100, g:100, b: 0}},
      {x: 46.5, y: 11, color: {r: 0, g: 50, b: 200}},
      {x: 64.5, y: 11, color: {r: 0, g: 50, b: 200}},
      {x: 82.5, y: 13.5, color: {r: 160, g: 82, b: 45}},
      {x: 82.5, y: 11, color: {r: 113, g: 107, b: 107}},
    ],
  },
  {
    buffer: {width: 2, height: 2},
    map: [
      {x: 0, y: 0, w: 4, h: ROWS * 2},
      {x: 4, y: 22, w: 4, h: 2},
      {x: 4, y: 38, w: 8, h: 4, color: 'rgb(0, 0, 255)'},
      {x: 4, y: 36, w: 4, h: 2, color: 'rgb(113, 107, 107)'},
      {x: 8, y: 42, w: 4, h: 2, color: 'rgb(113, 107, 107)'},
      {x: 4, y: 49, w: 4, h: 2, color: 'rgb(113, 107, 107)'},
      {x: 12, y: 0, w: 4, h: 28},
      {x: 16, y: 0, w: 8, h: 24},
      {x: 12, y: 32, w: 4, h: 14},
      {x: 16, y: 34, w: 10, h: 4},
      {x: 21, y: 42, w: 27, h: 4},
      {x: 31, y: 34, w: 12, h: 8},
      {x: 26, y: 34, w: 5, h: 4, color: 'rgb(255, 0, 0)'},
      {x: 16, y: 38, w: 15, h: 4, color: 'rgb(255, 0, 0)'},
      {x: 16, y: 42, w: 5, h: 4, color: 'rgb(255, 0, 0)'},
      {x: 27, y: 27, w: 4, h: 2},
      {x: 32, y: 22, w: 4, h: 2},
      {x: 37, y: 17, w: 4, h: 2},
      {x: 31, y: 12, w: 4, h: 2},
      {x: 24, y: 7, w: 4, h: 2},
      {x: 43, y: 0, w: 5, h: 10},
      {x: 43, y: 14, w: 5, h: 28},
      {x: 48, y: 0, w: 6, h: 10},
      {x: 48, y: 14, w: 6, h: 32},
      {x: 43, y: 10, w: 1, h: 4, color: 'rgb(0, 0, 255)'},
      {x: 32, y: 54, w: 7, h: 2},
      {x: 54, y: 44, w: 4, h: 2},
      {x: 60, y: 50, w: 4, h: 2},
      {x: 75, y: 46, w: 4, h: 10},
      {x: 79, y: 40, w: 4, h: 16},
      {x: 83, y: 34, w: 4, h: 22},
      {x: 87, y: 28, w: 4, h: 28},
      {x: 91, y: 22, w: 4, h: 34},
      {x: 95, y: 16, w: 8, h: 40},
      {x: 99, y: 0, w: 4, h: 16, color: 'rgb(255, 0, 255)'},
      {x: 103, y: 0, w: 4, h: 16, color: 'rgb(255, 0, 255)'},
      {x: 103, y: 10, w: 4, h: 46},
      {x: 0, y: 56, w:  COLUMNS * 2, h: 8},
    ],
    items: [
      {x: 26, y: 5, color: {r: 255, g: 0, b: 0}},
      {x: 49, y: 49, color: {...BACKGROUND_COLOR}},
      {x: 56, y: 42, color: {r: 0, g: 0, b: 255}},
      {x: 47, y: 12, color: {r:255, g:0, b: 0}}
    ],
    boxes: [
      {x: 69, y: 50, color: {...BACKGROUND_COLOR}}
    ],
    startPoint: {x: 5, y: 0},
    obstacles: [
      {x: 28, y: 56},
      {x: 40, y: 56, color: makeRgbColor(BACKGROUND_COLOR)},
      {x: 44, y: 56, color: 'rgb(0, 0, 255)'},
      {x: 48, y: 56, color: makeRgbColor(BACKGROUND_COLOR)},
      {x: 52, y: 56, color: 'rgb(0, 0, 255)'},
      {x: 56, y: 56, color: makeRgbColor(BACKGROUND_COLOR)},
      {x: 31, y: 34},
      {x: 107, y: 56},
      {x: 111, y: 56},
      {x: 115, y: 56},
    ],
    portal: {x: COLUMNS * 2 - 4, y: 8, color: 'pink'},
  }
];