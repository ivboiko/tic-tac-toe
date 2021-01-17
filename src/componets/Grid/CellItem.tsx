import React from 'react';
import {CellType} from "../../types/types";

type CellItemType = {
  onCellClick: (changedCellItemId: number) => void,
  cellItem: CellType,
  gameIsFinished: boolean,
  winningCombinationAdditionStyle: string,
};

const CellItem: React.FC<CellItemType> = ({
  onCellClick,
  cellItem,
  gameIsFinished,
  winningCombinationAdditionStyle
}) => {

  const onClickHandler = () => {
    if (cellItem.cellValue === null && !gameIsFinished) onCellClick(cellItem.cellId);
  };

  return (
    <div className={`cell-item ${winningCombinationAdditionStyle}`} onClick={onClickHandler}>
      {cellItem.cellValue}
    </div>
  );
};

export default CellItem;
