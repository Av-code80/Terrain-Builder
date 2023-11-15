import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { TileColorClasses, TileType } from "../../common/types/enum"
import { selectSelectedTile } from "../../features/selector"
import { pushToHistory, removeItem } from "../../features/slices/grid"

/**
 *
 * @CurrentTileInfo component to let to display and manage current tile info.
 *
 */

const CurrentTileInfo: React.FC = () => {
  const dispatch = useDispatch()
  const selectedTile = useSelector(selectSelectedTile)

  if (!selectedTile) {
    return (
      <div className="gradient-text flex items-center justify-center text-xl animate-bounce">
        Please select a tile <span>↘️</span>
      </div>
    )
  }

  const { index, type } = selectedTile
  const position = `(${Math.floor(index / 10)}, ${index % 10})`
  const tileColorClass = TileColorClasses[type as TileType]
  const isRemovable =
    selectedTile.type !== TileType.Grass && selectedTile.type !== TileType.Water

  let creditChangeText = ""
  if (type === "House") {
    creditChangeText = "+5 credits"
  } else if (type === "Rock") {
    creditChangeText = "-3 credits"
  }

  const handleRemoveClick = () => {
    dispatch(removeItem(selectedTile.index))
    dispatch(
      dispatch(
        dispatch(
          pushToHistory(
            `Removed ${type} at ${position}, credit: ${creditChangeText}`,
          ),
        ),
      ),
    )
  }
  return (
    <div className="bg-white gradient-shadow rounded gradient-shadow p-2 text-center gradient-border ">
      <div className="mb-3">
        <h2 className="gradient-text text-xl font-bold mb-3">Current Tile</h2>
        <div className={`h-2 ${tileColorClass} mb-3 rounded-full`}></div>
        <span className="text-purple-900">
          {type} (position: {position})
        </span>
      </div>
      <span className="mr-1 text-purple-900">Action:</span>
      {!isRemovable && (
        <button
          onClick={handleRemoveClick}
          className="bg-gradient-to-r from-red-400 to-red-600 text-sm text-white py-1 px-3 rounded-full hover:from-red-500 hover:to-red-700 transition-colors duration-300"
        >
          Remove (
          {selectedTile.creditChange >= 0
            ? `+${selectedTile.creditChange}`
            : selectedTile.creditChange}{" "}
          credit)
        </button>
      )}
    </div>
  )
}

export default CurrentTileInfo
