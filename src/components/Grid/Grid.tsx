import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import Tile from "../Tile/Tile"
import { gridSelector } from "../../app/selector"
import { placeItem, removeItem } from "../../features/terrain/terrainSlice"

const Grid: React.FC = () => {
  const dispatch = useDispatch()
  const grid = useSelector(gridSelector)

  const handleTileClick = (index: number) => {
    const tile = grid[index]
    if (tile === "house") dispatch(removeItem(index))
    if (tile === "grass") dispatch(placeItem({ index, item: "house" }))
  }

  const gridWithId = grid.map((tile, index) => ({
    type: tile,
    id: uuidv4(), // generate a unique key for each tile
    index,
  }))

  return (
    <div className="grid grid-cols-10 gap-1 w-3/5">
      {gridWithId.map((tile) => (
        <Tile
          key={tile.id}
          type={tile.type}
          onClick={() => handleTileClick(tile.index)}
        />
      ))}
    </div>
  )
}

export default Grid
