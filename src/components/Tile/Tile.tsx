import React from "react"
import { TileType, TileColorClasses } from "../../common/types/enum"
import { TileIcon } from "../Controls/TileIcon/TileIcon"

type TileProps = {
  type: TileType
  onClick: () => void
  tabIndex?: number
  role?: string
  "aria-label"?: string
}

/**
 * @Tile component to let to choose a tile.
 *
 */

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
      className={`h-16 w-16 border-2 flex flex-col text-center border-gray-300 cursor-pointer ${tileBackground} hover:bg-opacity-75 transition ease-in-out duration-150`}
    >
      <div className="h-full flex justify-center items-center">
        <TileIcon type={type} />
      </div>
    </div>
  )
}

export default Tile
