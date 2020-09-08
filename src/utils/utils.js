import {BLOCK_WIDTH, BLOCK_HEIGHT} from '../constant/map';

export const scaledMap = (mapArr) => {
  return mapArr.map(({x, y, w, h, color}) => ({x: x * BLOCK_WIDTH, y: y * BLOCK_HEIGHT, w: w * BLOCK_WIDTH, h: h * BLOCK_HEIGHT, color}));
}