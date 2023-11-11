import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/features/store"
import { TileColorClasses, TileType } from "../../interfaces/enum"

const CurrentTileInfo: React.FC = () => {
  const selectedTile = useSelector(
    (state: RootState) => state.terrain.selectedTile,
  )

  if (!selectedTile) {
    return <div>Please select a tile...</div>
  }

  const { index, type, action, creditChange } = selectedTile
  const position = `(${Math.floor(index / 10)}, ${index % 10})`
  const tileColorClass = TileColorClasses[type as TileType]

   return (
    <div className="flex flex-col items-center p-4 bg-white rounded shadow my-4">
      <div className={`w-8 h-8 ${tileColorClass} rounded-full mb-2`}></div>
      <div>Type: {type}</div>
      <div>Position: {position}</div>
      <div>Action: {action} ({creditChange})</div>
    </div>
  );
};

export default CurrentTileInfo
