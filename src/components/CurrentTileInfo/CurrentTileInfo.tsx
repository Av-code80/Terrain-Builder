import React from "react"
import { useSelector } from "react-redux"
import { TileColorClasses, TileType } from "../../common/types/enum"
import { selectSelectedTile } from "../../features/selector"

const CurrentTileInfo: React.FC = () => {
  const selectedTile = useSelector(selectSelectedTile)

  if (!selectedTile) {
    return (
      <div className="gradient-text flex items-center justify-center text-xl animate-bounce">
        Please select a tile <span>↘️</span>
      </div>
    )
  }

  const { index, type, action, creditChange } = selectedTile
  const position = `(${Math.floor(index / 10)}, ${index % 10})`
  const tileColorClass = TileColorClasses[type as TileType]

  return (
    <div className="bg-white gradient-shadow rounded gradient-shadow p-4 text-center gradient-border ">
      <h2 className="gradient-text text-lg font-bold mb-2">Selected Tile</h2>
      <div className={` h-2 ${tileColorClass} mb-2 rounded-full`}></div>
      <div className="text-purple-900">Type: {type}</div>
      <div className="text-purple-900">Position: {position}</div>
      <div className="text-purple-900">
        Action: {action} (
        {creditChange >= 0 ? `+${creditChange}` : creditChange})
      </div>
    </div>
  )
}

export default CurrentTileInfo
