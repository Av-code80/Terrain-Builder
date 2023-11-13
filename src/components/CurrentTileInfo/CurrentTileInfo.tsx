import React from "react"
import { useSelector } from "react-redux"
import { TileColorClasses, TileType } from "../../interfaces/enum"
import { selectSelectedTile } from "../../app/features/selector";

const CurrentTileInfo: React.FC = () => {
  const selectedTile = useSelector(selectSelectedTile)


  if (!selectedTile) {
    return (
      <div className="text-indigo-900 animate-bounce">
        Please select a tile...
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
       <div className="text-indigo-900">Type: {type}</div>
       <div className="text-indigo-900">Position: {position}</div>
       <div className="text-indigo-900">
         Action: {action} ({creditChange})
       </div>
     </div>
   )
};

export default CurrentTileInfo
