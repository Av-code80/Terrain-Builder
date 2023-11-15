export type TerrainType = "Grass" | "Water" | "Rock" | "House"
export type SelectItemType = "Water" | "Rock" | "House"

export interface TerrainState {
  grid: TerrainType[]
  credit: number
  selectedItem: TerrainType | null
  actionHistory: HistoryEntry[]
  currentHistoryIndex: number
  selectedTile: SelectedTile | null
  error: string | null
}

export interface HistoryEntry {
  grid: TerrainType[]
  credit: number
  description: string
}

export interface SelectedTile {
  index: number
  type: TerrainType
  action: string
  creditChange: number
}

export interface SelectedItemState {
  selectedItem: TerrainType | null
  selectedTile: SelectedTile | null
}

