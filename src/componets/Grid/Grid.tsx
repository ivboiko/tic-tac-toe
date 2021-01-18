import React, {useState} from "react";
import CellItem from "./CellItem";
import {CellType, GameValueType, WinningCombinationType} from "../../types/types";
import {checkIsWinnerExists} from "../../utils/checkWinner";
import {checkTie} from "../../utils/checkTie";

const Grid = () => {
  const initialCellsState =
    Array(9).fill(null).map((_, index) => ({cellId: index, cellValue: null}))

  const [cells, setCells] = useState<CellType[]>(initialCellsState);

  const [gameCurrentValue, setGameCurrentValue] = useState<GameValueType>('x');
  const [winningCombination, setWinningCombination] = useState<WinningCombinationType>(undefined);
  const [isTie, setIsTie] = useState<boolean>(false);

  const onCellClick = (changedCellItemId: number) => {
    const updatedCells = cells.map((cell): CellType => {
      if (cell.cellId === changedCellItemId && cell.cellValue === null) {
        return {
          cellId: changedCellItemId,
          cellValue: gameCurrentValue,
        };
      } else {
        return cell;
      }
    });

    const newWinningCombination = checkIsWinnerExists(updatedCells);
    setWinningCombination(newWinningCombination);

    if (!newWinningCombination) {
      const tie = checkTie(updatedCells);
      if (tie) {
        setIsTie(true);
      } else {
        const newGameCurrentValue = gameCurrentValue === 'x' ? 'o' : 'x';
        setGameCurrentValue(newGameCurrentValue);
      }
    }

    setCells(updatedCells);
  };

  const checkCellInWinningCombination = (cellId: number): string => {
    if (winningCombination) {
      if (winningCombination.includes(cellId)) {
        return 'winning-combination-cell-item';
      }
    }
    return '';
  };

  const restartGame = () => {
    setCells(initialCellsState);
    if (gameCurrentValue === 'o') setGameCurrentValue('x');
    if (winningCombination) setWinningCombination(undefined);
    if (isTie) setIsTie(false);
  };

  return (
    <div className='game-container'>
      {
        <div className='additional-text'>
          {!isTie && gameCurrentValue.toUpperCase()}
          {winningCombination && ', you\'re winner'}
          {!winningCombination && !isTie && ', is your turn'}
          {isTie && 'Tie'}!
        </div>
      }
      <div className="grid">
        {
          cells.map((item, index) => (
            <CellItem
              key={index.toString()}
              onCellClick={onCellClick}
              cellItem={item}
              gameIsFinished={winningCombination !== undefined}
              winningCombinationAdditionStyle={checkCellInWinningCombination(item.cellId)} />
            )
          )
        }
      </div>
      <div>
        {
          (isTie || winningCombination) && <button className='restart-button' onClick={restartGame}>Restart</button>
        }
      </div>
    </div>
  );
};

export default Grid;
