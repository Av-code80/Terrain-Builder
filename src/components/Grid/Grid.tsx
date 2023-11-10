import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import Tile from "../Tile/Tile"
import { selectGrid, selectSelectedItem,  } from "../../app/selector"
import { placeItem, removeItem, setSelectedItem } from "../../features/terrain/terrainSlice"

const Grid: React.FC = () => {
  const dispatch = useDispatch()
  const grid = useSelector(selectGrid)
  const selectedItem = useSelector(selectSelectedItem)

  const handleTileClick = (index: number) => {
    const tile = grid[index]
    if (tile === "house") {
      dispatch(removeItem(index))
    } else if (tile === "grass" && selectedItem) {
      dispatch(placeItem({ index, item: selectedItem }))
    }
  }

  const gridWithId = grid.map((tile: any, index: any) => ({
    type: tile,
    id: uuidv4(),
    index,
  }))

  return (
    <div className="grid grid-cols-10 gap-1 w-full">
      {gridWithId.map((tile: { id: Key | null | undefined; type: string; index: number }) => (
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
