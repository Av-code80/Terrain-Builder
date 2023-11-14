import React from "react"
import { TileType, TileColorClasses } from "../../common/types/enum"

type TileProps = {
  type: TileType
  onClick: () => void
  tabIndex?: number 
  role?: string 
  "aria-label"?: string 
}

const Tile: React.FC<TileProps> = ({
  type,
  onClick,
  tabIndex,
  role,
  "aria-label": ariaLabel,
}) => {
  const tileBackground = TileColorClasses[type]

  return (
    <div
      onClick={onClick}
      tabIndex={tabIndex}
      role={role}
      aria-label={ariaLabel}
      className={`h-16 w-16 border-2 border-gray-300 cursor-pointer ${tileBackground} hover:bg-opacity-75 transition ease-in-out duration-150`}
    ></div>
  )
}

export default Tile
