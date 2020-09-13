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
export const POTAL_HEIGHT = BLOCK_HEIGHT * 4;

export const BACKGROUND_COLOR = {r: 113, g: 107, b: 107};
export const GAME_STATE = {
  GAME_READY: 'GAME_READY',
  GAME_PLAYING: 'GAME_PLAYING',
  GAME_OVER: 'GAME_OVER',
  GAME_CLEAR: 'GAME_CLEAR',
  STAGE_CLEAR: 'STAGE_CLEAR'
}

export const CLEAR_TEXT_COLOR = [
  'rgb(216, 39, 53)',
  'rgb(255, 161, 53)',
  'rgb(255, 203, 53)',
  'rgb(255, 249, 53)',
  '',
  'rgb(0, 158, 71)',
  'rgb(22, 221, 53)',
  'rgb(0, 169, 252)',
  'rgb(189, 122, 246)',
  'pink'
];

export const CLEAR_TEXT = 'GAME CLEAR'
export const FONT_SIZE = Math.floor(MAP_WIDTH / 35) ;