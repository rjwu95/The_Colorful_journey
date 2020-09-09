import {BLOCK_WIDTH, BLOCK_HEIGHT, BACKGROUND_COLOR} from '../constant/map';

export const scaledMap = (mapArr) => {
  return mapArr.map(({x, y, w, h, color}) => ({x: x * BLOCK_WIDTH, y: y * BLOCK_HEIGHT, w: w * BLOCK_WIDTH, h: h * BLOCK_HEIGHT, color}));
}
export const hasBackgroundColor = (color) => color.r === 0 && color.g === 0 && color.b === 0;

export const makeRgbColor = (color) => {
  if (hasBackgroundColor(color)) {
    return `rgb(${BACKGROUND_COLOR.r}, ${BACKGROUND_COLOR.g}, ${BACKGROUND_COLOR.b})`
  }

  return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

export const addBackgroundColor = (backgroundColor, color) => {
  const {r, g, b} = color;
  backgroundColor.r += r;
  backgroundColor.g += g;
  backgroundColor.b += b;
}

export const initBackgroundColor = (backgroundColor) => {
  backgroundColor.r = 0;
  backgroundColor.g = 0;
  backgroundColor.b = 0;
}