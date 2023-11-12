import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Tile from "../Tile/Tile"
import {
  selectCredit,
  selectGrid,
  selectSelectedItem,
} from "../../app/features/selector"
import { TileType } from "../../interfaces/enum"
import {
  placeItem,
  pushToHistory,
  removeItem,
  setSelectedTile,
  initializeGrid,
} from "../../app/features/slices/terrain/terrainSlice"

const Grid: React.FC = () => {
  const dispatch = useDispatch()
  const grid = useSelector(selectGrid)
  const selectedItem = useSelector(selectSelectedItem)
  const credit = useSelector(selectCredit)

  useEffect(() => {
    dispatch(initializeGrid())
  }, [dispatch])

  const handleTileClick = (index: number) => {
    const tileType = grid[index]
    let actionType = ""
    let creditChange = 0
    let description = ""

    if (tileType === "Grass" && selectedItem) {
      actionType = "Place"
      creditChange = selectedItem === "House" ? -10 : -3
      description = `Placed ${selectedItem} at position (${Math.floor(
        index / 10,
      )}, ${index % 10})`
      dispatch(placeItem({ index, item: selectedItem }))
    } else if (tileType !== "Grass" && credit >= 1) {
      actionType = "Remove"
      creditChange = tileType === "House" ? 5 : tileType === "Rock" ? -3 : 0
      description = `Removed ${tileType} at position (${Math.floor(
        index / 10,
      )}, ${index % 10})`

      dispatch(removeItem(index))
    }

    if (description) {
      dispatch(pushToHistory(description))
    }

    if (actionType) {
      dispatch(
        setSelectedTile({
          index: index,
          type: tileType,
          action: actionType,
          creditChange: creditChange,
        }),
      )
    }
  }

  const stringToTileType = (type: string): TileType => {
    switch (type) {
      case "Grass":
        return TileType.Grass
      case "Water":
        return TileType.Water
      case "Rock":
        return TileType.Rock
      case "House":
        return TileType.House
      default:
        return TileType.Grass
    }
  }

  return (
    <div className="max-w-max mx-auto mt-8">
      <div className="grid grid-cols-10 gap-1 shadow-lg p-4 bg-green-100 rounded">
        {grid.map((tileType, index) => (
          <Tile
            key={index}
            type={stringToTileType(tileType)}
            onClick={() => handleTileClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Grid
