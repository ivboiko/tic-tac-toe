import {CellType} from "../types/types";

export const checkTie = (cells: Array<CellType>): boolean => {
  for (const cell of cells) {
    if (cell.cellValue === null) {
      return false;
    }
  }
  return true;
};
