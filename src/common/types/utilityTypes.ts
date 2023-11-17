import { TileType } from ".";

export const TileColorClasses: Record<TileType, string> = {
  [TileType.Grass]: "bg-green-500",
  [TileType.Water]: "bg-blue-500",
  [TileType.Rock]: "bg-gray-500",
  [TileType.House]: "bg-orange-500",
}
