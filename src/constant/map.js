// export const MAP_WIDTH = window.innerWidth;
export const MAP_HEIGHT = window.innerHeight;
export const MAP_WIDTH = MAP_HEIGHT * 1.8;

export const TILE_MAP_WIDTH = MAP_WIDTH * 2;
export const TILE_MAP_HEIGHT = MAP_HEIGHT * 2;

export const ROWS = 32;
export const COLUMNS = 58;

export const BLOCK_WIDTH = MAP_WIDTH / COLUMNS;
export const BLOCK_HEIGHT = MAP_HEIGHT / ROWS;


export const ITEM_SIZE = BLOCK_WIDTH;
export const BOX_SIZE = BLOCK_WIDTH * 6;

export const GAME_STATE = {
  GAME_READY: 'GAME_READY',
  GAME_PLAYING: 'GAME_PLAYING',
  GAME_OVER: 'GAME_OVER',
  GAME_CLEAR: 'GAME_CLEAR',
  STAGE_CLEAR: 'STAGE_CLEAR'
}