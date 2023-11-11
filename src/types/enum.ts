export enum TileType {
  Grass = "grass",
  Water = "water",
  Rock = "rock",
  House = "house",
}

export const TileColorClasses: Record<TileType, string> = {
  [TileType.Grass]: "bg-green-200",
  [TileType.Water]: "bg-blue-300", 
  [TileType.Rock]: "bg-gray-400", 
  [TileType.House]: "bg-yellow-500", 
}
