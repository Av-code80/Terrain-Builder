import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import Tile from "../Tile/Tile"
import { selectGrid, selectSelectedItem,  } from "../../app/selector"
import { placeItem, pushToHistory, removeItem, setSelectedItem } from "../../features/terrain/terrainSlice"

const Grid: React.FC = () => {
  const dispatch = useDispatch()
  const grid = useSelector(selectGrid)
  const selectedItem = useSelector(selectSelectedItem)
  
  const handleTileClick = (index: number) => {
 const tile = grid[index];
    if (tile === "house") {
      dispatch(pushToHistory(`Removed house at position (${Math.floor(index / 10)}, ${index % 10})`));
      dispatch(removeItem(index));
    } else if (tile === "grass" && selectedItem) {
      dispatch(pushToHistory(`Placed ${selectedItem} at position (${Math.floor(index / 10)}, ${index % 10})`));
      dispatch(placeItem({ index, item: selectedItem }));
    }
  }
  const gridWithId = grid.map((tile, index) => ({
    type: tile,
    id: uuidv4(),
    index,
  }))

  return (
    <div className="grid grid-cols-10 w-full">
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
