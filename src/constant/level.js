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
      {x: 82, y: 24, color: {r: 200, g: 0, b: 0}},
      {x: COLUMNS * 2 - 5, y: 24, color: {r: 0, g: 0, b: 200}},
    ],
    boxes: [
      {x: COLUMNS * 2 - 16, y: 20, color: {r: 200, g: 0, b: 0}}
    ],
    obstacles: [
      {x: COLUMNS * 2 - 30, y: 26}
    ],
    portal: {x: COLUMNS * 2 - 5, y: 9},
    startPoint: {x: 2, y: 6}
  },
  {
    buffer: {width: 2, height: 1},
    map: [
      {x: 25, y: 21, w: 1, h: 4, color: 'rgb(200, 0, 0)'},
      {x: 25, y: 20, w: 5, h: 1, color: 'rgb(200, 0, 0)'},
      {x: 0, y: 0, w: 4, h: ROWS},
      {x: 4, y: 25, w: COLUMNS * 2, h: 12},
      {x: 37, y: 20, w: 3, h: 5, color: 'rgb(200, 200, 0)'},
      {x: 45, y: 15, w: 3, h: 10},
      {x: 54, y: 15, w: 3, h: 10, color: 'rgb(200, 0, 200)'},
      {x: 63, y: 15, w: 3, h: 10},
      {x: 72, y: 15, w: 3, h: 10, color: 'rgb(200, 0, 200)'},
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
    portal: {x: COLUMNS * 2 - 4, y: 9},
    startPoint: {x: 5, y: 15},
    items: [
      {x: 14, y: 23, color: {r:200, g:0, b: 0}},
      {x: 28, y: 23, color: {r:0, g:200, b: 0}},
      {x: 46.5, y: 11, color: {r: 0, g: 0, b: 200}},
      {x: 82.5, y: 13.5, color: {r: 160, g: 82, b: 45}},
      {x: 82.5, y: 11, color: BACKGROUND_COLOR},
    ],
  },
  {
    buffer: {width: 2, height: 2},
    map: [
      {x: 0, y: 0, w: 4, h: ROWS * 2},
      {x: 4, y: 22, w: 4, h: 2},
      {x: 4, y: 38, w: 8, h: 4, color: 'rgb(0, 0, 200)'},
      {x: 4, y: 36, w: 4, h: 2, color: 'rgb(113, 107, 107)'},
      {x: 8, y: 42, w: 4, h: 2, color: 'rgb(113, 107, 107)'},
      {x: 4, y: 49, w: 4, h: 2, color: 'rgb(113, 107, 107)'},
      {x: 12, y: 0, w: 4, h: 28},
      {x: 16, y: 0, w: 8, h: 24},
      {x: 12, y: 32, w: 4, h: 14},
      {x: 16, y: 34, w: 10, h: 4},
      {x: 21, y: 42, w: 27, h: 4},
      {x: 31, y: 34, w: 12, h: 8},
      {x: 26, y: 34, w: 5, h: 4, color: 'rgb(200, 0, 0)'},
      {x: 16, y: 38, w: 15, h: 4, color: 'rgb(200, 0, 0)'},
      {x: 16, y: 42, w: 5, h: 4, color: 'rgb(200, 0, 0)'},
      {x: 27, y: 27, w: 4, h: 2},
      {x: 32, y: 22, w: 4, h: 2},
      {x: 37, y: 17, w: 4, h: 2},
      {x: 31, y: 12, w: 4, h: 2},
      {x: 24, y: 7, w: 4, h: 2},
      {x: 43, y: 0, w: 5, h: 10},
      {x: 43, y: 14, w: 5, h: 28},
      {x: 48, y: 0, w: 6, h: 10},
      {x: 48, y: 14, w: 6, h: 32},
      {x: 43, y: 10, w: 1, h: 4, color: 'rgb(0, 0, 200)'},
      {x: 32, y: 54, w: 7, h: 2},
      {x: 54, y: 44, w: 4, h: 2},
      {x: 60, y: 50, w: 4, h: 2},
      {x: 75, y: 46, w: 4, h: 10},
      {x: 79, y: 40, w: 4, h: 16},
      {x: 83, y: 34, w: 4, h: 22},
      {x: 87, y: 28, w: 4, h: 28},
      {x: 91, y: 22, w: 4, h: 34},
      {x: 95, y: 16, w: 8, h: 40},
      {x: 99, y: 0, w: 4, h: 16, color: 'rgb(200, 0, 200)'},
      {x: 103, y: 0, w: 4, h: 16, color: 'rgb(200, 0, 200)'},
      {x: 103, y: 10, w: 4, h: 46},
      {x: 0, y: 56, w:  COLUMNS * 2, h: 8},
    ],
    items: [
      {x: 26, y: 5, color: {r: 200, g: 0, b: 0}},
      {x: 49, y: 49, color: {...BACKGROUND_COLOR}},
      {x: 56, y: 42, color: {r: 0, g: 0, b: 200}},
      {x: 47, y: 12, color: {r:200, g:0, b: 0}}
    ],
    boxes: [
      {x: 69, y: 50, color: {...BACKGROUND_COLOR}}
    ],
    startPoint: {x: 5, y: 0},
    obstacles: [
      {x: 28, y: 56},
      {x: 40, y: 56, color: makeRgbColor(BACKGROUND_COLOR)},
      {x: 44, y: 56, color: 'rgb(0, 0, 200)'},
      {x: 48, y: 56, color: makeRgbColor(BACKGROUND_COLOR)},
      {x: 52, y: 56, color: 'rgb(0, 0, 200)'},
      {x: 56, y: 56, color: makeRgbColor(BACKGROUND_COLOR)},
      {x: 31, y: 34},
      {x: 107, y: 56},
      {x: 111, y: 56},
      {x: 115, y: 56},
    ],
    portal: {x: COLUMNS * 2 - 4, y: 8},
  },
  {
    buffer: {width: 2, height: 2},
    map: [
      {x: 0, y: 0, w:4, h: ROWS*2},
      {x: 4, y: ROWS*2-7, w:COLUMNS*2-8, h: 7},
      {x: COLUMNS*2-4, y: 0, w:4, h: ROWS*2},
      {x: 19, y: 51, w:13, h: 2},
      {x: 4, y: 45, w:12, h: 2},
      {x: 8, y: 40, w:8, h: 5, color: 'rgb(200, 0, 0)'},
      {x: 17, y: 34, w:8, h: 5, color: 'rgb(200, 0, 0)'},
      {x: 49, y: 51, w:14, h: 2},
      {x: 63, y: 45, w:2, h: 20},
      {x: 17, y: 39, w:12, h: 2},
      {x: 4, y: 33, w:12, h: 2},
      {x: 19, y: 27, w:9, h: 2},
      {x: 28, y: 21, w:4, h: 30},
      {x: 29, y: 26, w:49, h: 8},
      {x: 78, y: 15, w:4, h: 19},
      {x: 82, y: 19, w:12, h: 3},
      {x: 100, y: 25, w:12, h: 3},
      {x: 82, y: 31, w:12, h: 3},
      {x: 100, y: 37, w:12, h: 3},
      {x: 49, y: 33, w:3, h: 12},
      {x: 91, y: 34, w:3, h: 10, color: 'rgb(200, 0, 0)'},
      {x: 52, y: 43, w:13, h: 2},
      {x: 65, y: 43, w:13, h: 2, color: 'rgb(200, 200, 0)'},
      {x: 78, y: 43, w:16, h: 2},
      {x: COLUMNS * 2 - 30, y: 49, w: 30, h: 2},
      {x: COLUMNS * 2 - 30, y: 51, w: 2, h: 6, color: 'rgb(200, 200, 0)'},
    ],
    startPoint: {x: 5, y: ROWS * 2 - 15},
    portal: {x: COLUMNS * 2 - 10, y: ROWS * 2 - 11},
    items: [
      {x: 60, y: 48, color: {r: 200, g: 0, b: 0}},
      {x: 6, y: 42, color: {r: 0, g: 0, b: 200}},
      {x:30, y: 19, color: {r: 0, g: 200, b: 0}},
      {x:75, y: 24, color: { r: 0, g: 0, b: 200}},

      {x: COLUMNS * 2 - 8, y: ROWS * 2 - 17, color: {r: 200, g: 0, b: 0}},
      {x: 55, y: 40, color: {r: 0, g: 200, b: 0}}, //1
      {x: 23, y: 25, color: {...BACKGROUND_COLOR}},
      {x: 34, y: 24, color: {...BACKGROUND_COLOR}},
      {x:88, y: 17, color: { ...BACKGROUND_COLOR}},
    ],
    boxes: [
      {x:60, y: 20, color: { r: 0, g: 200, b: 0}},
    ],
    obstacles: [
      {x:78.5, y: 15, color: 'rgb(0, 200, 200)'},
    ],
  },
  {
    buffer: {width: 2, height: 3},
    map: [
      {x: 0, y: 0, w:  4, h: 26},
      {x: 0, y: 26, w:  106, h: 8},
      {x: 12, y: 10, w:  8, h: 16},
      {x: 4, y: 19, w: 4, h: 2, color: makeRgbColor(BACKGROUND_COLOR)},
      {x: 8, y: 12, w: 4, h: 2, color: makeRgbColor(BACKGROUND_COLOR)},
      {x: 20, y: 7, w: 6,  h: 19},
      {x: 32, y: 10, w: 4,  h: 2},
      {x: 38, y: 4, w: 4,  h: 2}, // 위
      {x: 38, y: 16, w: 4,  h: 2}, // 아래
      {x: 44, y: 12, w: 4,  h: 2},
      {x: 46, y: 19, w:6, h: 2, color: 'rgb(0, 0, 200)'},
      {x: 53, y: 0, w: 12, h: 6, color: 'rgb(200, 200, 200)'},
      {x: 53, y: 19, w: 4,  h: 7},
      {x: 53, y: 6, w: 4,  h: 9},
      {x: 57, y: 6, w: 8,  h: 20},
      {x: 65, y: 8, w: 24, h: 2, color: makeRgbColor(BACKGROUND_COLOR)}, // 회색 장애물
      {x: 89, y: 0, w: 27,  h: 11},

      {x: 80, y: 52, w: 6, h: 6, color:  makeRgbColor(BACKGROUND_COLOR)}, // 1번 박스
      {x: 74, y: 48, w: 6, h: 10}, // 2번 박스
      {x: 57, y: 46, w: 4, h: 2, color: 'rgb(200, 0, 0)'}, // 밟은거
      {x: 44, y: 46, w: 4, h: 2, color: 'rgb(0, 200, 200)'}, // 밟은거
      {x: 14, y: 58, w: 102,  h: 8}, // 두번째 바닥

      {x: 18, y: 82, w: 4,  h: 2},
      {x: 22, y: 76, w: 3,  h: 8},
      {x: 22, y: 84, w: 3,  h: 5, color: 'rgb(200, 200, 0)'},
      {x: 25, y: 76, w: 30,  h: 5}, // 2층 블록
      {x: 52, y: 81, w: 3,  h: 8, color: 'rgb(200, 0, 0)'},

      // {x: 72, y: 70, w: 3,  h: 9, color: 'rgb(200, 0, 0)'},
      {x: 65, y: 66, w: 3,  h: 24, color: 'rgb(200, 200, 0)'},

      {x: 80, y: 84, w: 4,  h: 2, color: makeRgbColor(BACKGROUND_COLOR)},
      {x: 87, y: 79, w: 4,  h: 2, color: 'rgb(0, 0, 200)'},
      {x: 94, y: 74, w: 4,  h: 2,  color: 'rgb(0, 200, 200)'},

      {x: 108, y: 79, w: 8,  h: 18},
      {x: 0, y: 89, w: 116,  h: 8},
    ],
    items: [
      {x: 10, y: 24, color: {r: 0, g: 0, b: 200}},
      {x: 40, y: 2, color: BACKGROUND_COLOR},
      {x: 40, y: 14, color: {r: 0, g: 200, b: 0}},
      {x: 54, y: 17, color: {r: 200, g: 0, b: 0}},
      {x: 93, y: 56, color: BACKGROUND_COLOR},
      {x: 97, y: 56, color: {r: 200, g: 0, b: 0}},
      {x: 101, y: 56, color: {r:0, g: 200, b: 0}},

      {x: 76, y: 40, color: {r:0, g: 0, b: 200}},
      // {x: 82, y: 87, color: {r:0, g: 0, b: 200}},
      {x: 82, y: 82, color: {r:0, g: 0, b: 200}},
      {x: 89, y: 77, color: {r:0, g: 200, b: 0}},
      {x: 96, y: 72, color: {r:200, g: 0, b: 0}},
      {x: 62, y: 87, color: {r: 200, g: 0, b: 0}},
      {x: 27, y: 87, color: {r: 0, g: 200, b: 0}},
      // {x: 76, y: 89},18, y: 82,
      {x: 74, y: 87, color: BACKGROUND_COLOR},
      {x: 20, y: 80, color: BACKGROUND_COLOR},
      
      {x: 86, y: 6, color: BACKGROUND_COLOR},
    ],
    boxes: [
      {x: 74, y: 42, color: {r: 200, g: 200, b: 0}},
    ],
    startPoint: {x: 5, y: 5},
    obstacles: [
      {x: 26, y: 26},
      {x: 30, y: 26},
      {x: 34, y: 26},
      {x: 38, y: 26},
      {x: 42, y: 26},
      {x: 46, y: 26},
      {x: 50, y: 26},
      {x: 65, y: 26},
      {x: 69, y: 26},
      {x: 73, y: 26},
      {x: 77, y: 26},
      {x: 81, y: 26},
      {x: 85, y: 26},
      {x: 70, y: 58},
      {x: 66, y: 58},
      {x: 62, y: 58},
      {x: 58, y: 58},
      {x: 54, y: 58},
      {x: 50, y: 58},
      {x: 46, y: 58},
      {x: 42, y: 58},
      {x: 38, y: 58},
      {x: 34, y: 58},
      {x: 30, y: 58},
      {x: 76, y: 89},

    ],
    portal: {x: COLUMNS * 2 - 4, y: 75},
  }
];