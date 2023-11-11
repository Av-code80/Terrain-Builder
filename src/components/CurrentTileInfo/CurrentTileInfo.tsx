import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { TileColorClasses, TileType } from "../../types/enum"

const CurrentTileInfo: React.FC = () => {
  const selectedTile = useSelector(
    (state: RootState) => state.terrain.selectedTile,
  )

  if (!selectedTile) {
    return <div>No tile selected</div>
  }

  const { index, type, action, creditChange } = selectedTile
  const position = `(${Math.floor(index / 10)}, ${index % 10})`
  const tileColorClass = TileColorClasses[type as TileType]

  return (
    <div className="p-4">
      <div>Current tile:</div>
      <div className={`w-6 h-6 ${tileColorClass} inline-block mr-2`}></div>
      <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
      <div>Position: {position}</div>
      <div>
        Action: {action} (
        {creditChange >= 0 ? `+${creditChange}` : creditChange} credit)
      </div>
    </div>
  )
}

export default CurrentTileInfo
