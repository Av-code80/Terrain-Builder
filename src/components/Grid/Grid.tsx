import React, { useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import Tile from "../Tile/Tile"
import { selectGrid } from "../../features/selector"
import { initializeGrid } from "../../features/slices/grid/gridSlice"
import { TerrainType } from "../../common/types/interfaces"
import { useTileClickHandler } from "../../common/hooks/useTileclickHandler"
import { stringToTileType } from "../../common/utils/tileUtils"
export type TileType = TerrainType

const Grid: React.FC = () => {
  const dispatch = useDispatch()
  const grid = useSelector(selectGrid) as TerrainType[]

  const handleTileClick = useTileClickHandler(grid)

  useEffect(() => {
    dispatch(initializeGrid())
  }, [dispatch])

  return (
    <div className="max-w-max mx-auto mt-8 animate-fadeIn">
      <div
        className="grid grid-cols-10 gap-1 shadow-lg p-4 bg-green-100 rounded"
        role="grid"
      >
        {grid.map((tileType, index) => {
          const key = `tile-${tileType}-${index}` // or using Date.now() when there is no unique id
          return (
            <Tile
              key={key}
              type={stringToTileType(tileType)}
              onClick={() => handleTileClick(index)}
              tabIndex={0} // for keyboard accessibility
              role="gridcell" 
              aria-label={`Tile type: ${tileType}`} 
            />
          )
        })}
      </div>
    </div>
  )
}

export default Grid
