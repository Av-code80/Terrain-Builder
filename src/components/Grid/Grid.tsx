import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import Tile from "../Tile/Tile"
import { selectGrid, selectSelectedItem } from "../../app/selector"
import { TileType } from "../../types/enum" // Import the TileType enum
import {
  placeItem,
  pushToHistory,
  removeItem,
  setSelectedTile,
} from "../../features/terrain/terrainSlice"

const Grid: React.FC = () => {
  const dispatch = useDispatch()
  const grid = useSelector(selectGrid)
  const selectedItem = useSelector(selectSelectedItem)

  const handleTileClick = (index: number) => {
    const tileType = grid[index]
    let actionType = ""
    let creditChange = 0
    let description = ""

    if (tileType === "Grass" && selectedItem) {
      actionType = "Place"
      creditChange = selectedItem === "House" ? -10 : -3 // Example costs
      description = `Placed ${selectedItem} at position (${Math.floor(
        index / 10,
      )}, ${index % 10})`
      dispatch(placeItem({ index, item: selectedItem }))
    } else if (tileType !== "Grass") {
      actionType = "Remove"
      creditChange = tileType === "House" ? 5 : tileType === "Rock" ? 3 : 0
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

  const gridWithId = grid.map((tile, index) => ({
    type: tile,
    id: uuidv4(),
    index,
  }))

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
    <div className="grid grid-cols-10 w-full">
      {gridWithId.map((tile) => (
        <Tile
          key={tile.id}
          type={stringToTileType(tile.type)}
          onClick={() => handleTileClick(tile.index)}
        />
      ))}
    </div>
  )
}

export default Grid
