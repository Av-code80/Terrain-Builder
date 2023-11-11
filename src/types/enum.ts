export enum TileType {
  Grass = "Grass",
  Water = "Water",
  Rock = "Rock",
  House = "House",
}

export const TileColorClasses: Record<TileType, string> = {
  [TileType.Grass]: "bg-green-200",
  [TileType.Water]: "bg-blue-300",
  [TileType.Rock]: "bg-gray-400",
  [TileType.House]: "bg-yellow-500",
}
