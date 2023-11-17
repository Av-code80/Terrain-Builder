export type GridType = "Grass" | "Water" | "Rock" | "House"
export type ControlItemsType = "Water" | "Rock" | "House"

export interface GridState {
  grid: GridType[]
  credit: number
  selectedItem: GridType | null
  actionHistory: HistoryEntry[]
  currentHistoryIndex: number
  selectedTile: SelectedTile | null
  error: string | null
}

export interface HistoryEntry {
  grid: GridType[]
  credit: number
  description: string
}

export interface SelectedTile {
  index: number
  type: GridType
  action: string
  creditChange: number
}

export interface SelectedItemState {
  selectedItem: GridType | null
  selectedTile: SelectedTile | null
}
