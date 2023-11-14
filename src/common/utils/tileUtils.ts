import { TileType } from "../../common/types/enum"

export const stringToTileType = (type: string): TileType => {
  switch (type) {
    case "Grass":
      return TileType.Grass
    case "Water":
      return TileType.Water
    case "Rock":
      return TileType.Rock
    case "House":
      return TileType.House
    default:
      return TileType.Grass
  }
}
