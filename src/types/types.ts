export type GameValueType = 'x' | 'o';

export type CellValueType = null | GameValueType;

export type CellType = {
  cellId: number,
  cellValue: CellValueType,
};

export type WinningCombinationType = Array<number> | undefined;
