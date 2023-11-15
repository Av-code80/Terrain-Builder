import React from "react"
import { TileType } from "../../../common/types"

type TileIconProps = {
  type: TileType
}

export const TileIcon: React.FC<TileIconProps> = ({ type }) => {
  const getIcon = (type: TileType) => {
    switch (type) {
      case TileType.Water:
        return "💧"
      case TileType.Rock:
        return "🪨"
      case TileType.House:
        return "🏠"
      case TileType.Grass:
      default:
        return "🍀" 
    }
  }

  return <span>{getIcon(type)}</span>
}
