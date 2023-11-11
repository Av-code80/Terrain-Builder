import React from "react"
import { TileType, TileColorClasses } from "../../types/enum"

type TileProps = {
  type: TileType
  onClick: () => void
}

const Tile: React.FC<TileProps> = ({ type, onClick }) => {
  const tileBackground = TileColorClasses[type]

  return (
    <div
      className={`h-10 ${tileBackground} border border-gray-400 cursor-pointer`}
      onClick={onClick}
    ></div>
  )
}

export default Tile
