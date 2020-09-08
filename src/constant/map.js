// export const MAP_WIDTH = window.innerWidth;
export const MAP_RATIO = 1.8;
export const MAP_HEIGHT = window.innerHeight;
export const MAP_WIDTH = MAP_HEIGHT * MAP_RATIO;

export const ROWS = 32;
export const COLUMNS = 58;

export const BLOCK_WIDTH = MAP_WIDTH / COLUMNS;
export const BLOCK_HEIGHT = MAP_HEIGHT / ROWS;


export const ITEM_SIZE = BLOCK_WIDTH;
export const BOX_WIDTH = BLOCK_WIDTH * 6;
export const BOX_HEIGHT = BLOCK_HEIGHT * 6;

export const OBSTACLE = 4;
export const OBSTACLE_INTERVAL = MAP_WIDTH/70;
export const SIDE = OBSTACLE_INTERVAL/2;

export const POTAL_WIDTH = BLOCK_WIDTH * 2;
export const POTAL_HEIGHT = BLOCK_HEIGHT * 2;

export const GAME_STATE = {
  GAME_READY: 'GAME_READY',
  GAME_PLAYING: 'GAME_PLAYING',
  GAME_OVER: 'GAME_OVER',
  GAME_CLEAR: 'GAME_CLEAR',
  STAGE_CLEAR: 'STAGE_CLEAR'
}