import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/features/store"
import { TileColorClasses, TileType } from "../../interfaces/enum"

const CurrentTileInfo: React.FC = () => {
  const selectedTile = useSelector(
    (state: RootState) => state.terrain.selectedTile,
  )

  if (!selectedTile) {
    return <div className="text-indigo-900">Please select a tile...</div>
  }

  const { index, type, action, creditChange } = selectedTile
  const position = `(${Math.floor(index / 10)}, ${index % 10})`
  const tileColorClass = TileColorClasses[type as TileType]

   return (
     <div className="bg-white gradient-shadow rounded gradient-shadow p-4 text-center gradient-border">
       <h2 className="gradient-text text-lg font-bold mb-2">Selected Tile</h2>
       <div className={`w-8 h-8 ${tileColorClass}  rounded-full mb-2`}></div>
       <div className="text-indigo-900">Type: {type}</div>
       <div className="text-indigo-900">Position: {position}</div>
       <div className="text-indigo-900">
         Action: {action} ({creditChange})
       </div>
     </div>
   )
};

export default CurrentTileInfo
