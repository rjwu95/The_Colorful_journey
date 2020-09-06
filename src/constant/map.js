export const MAP_WIDTH = window.innerWidth;
export const MAP_HEIGHT = window.innerHeight;

export const TILE_MAP_WIDTH = MAP_WIDTH * 2;
export const TILE_MAP_HEIGHT = MAP_HEIGHT * 2;

export const ROWS = 32;
export const COLUMNS = 58;

export const BLOCK_SIZE = MAP_WIDTH / COLUMNS;
export const ITEM_SIZE = BLOCK_SIZE;
export const BOX_SIZE = BLOCK_SIZE * 6;

export const GAME_STATE = {
  GAME_READY: 'GAME_READY',
  GAME_PLAYING: 'GAME_PLAYING',
  GAME_OVER: 'GAME_OVER',
  GAME_CLEAR: 'GAME_CLEAR',
  STAGE_CLEAR: 'STAGE_CLEAR'
}