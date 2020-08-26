import {BLOCK_SIZE} from '../constant/map';

export const scaledMap = (mapArr) => {
  return mapArr.map(({x, y, w, h}) => ({x: x * BLOCK_SIZE, y: y * BLOCK_SIZE, w: w * BLOCK_SIZE, h: h * BLOCK_SIZE}));
}