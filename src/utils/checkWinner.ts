import {CellType, WinningCombinationType} from '../types/types';

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

export const checkIsWinnerExists = (cells: Array<CellType>): WinningCombinationType => {
  return winningCombinations.find(combination => {
    const line = combination.map(cellIndex => cells[cellIndex].cellValue);
    return line[0] && line.every(cellValue => cellValue === line[0]);
  });
};
