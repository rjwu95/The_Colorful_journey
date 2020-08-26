export const MAP_WIDTH = window.innerWidth;
export const MAP_HEIGHT = window.innerHeight;
export const TILE_MAP_WIDTH = MAP_WIDTH * 2;
const MAP_RATIO = MAP_WIDTH/MAP_HEIGHT;
export const ROWS = 32;
export const COLUMNS = Math.floor(ROWS * MAP_RATIO)
export const BLOCK_SIZE = MAP_WIDTH / COLUMNS;