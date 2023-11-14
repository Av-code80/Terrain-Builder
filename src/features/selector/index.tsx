import { RootState } from "../../app/store"

export const selectGrid = (state: RootState) => state.grid.grid
export const selectCredit = (state: RootState) => state.grid.credit
export const selectSelectedItem = (state: RootState) => state.grid.selectedItem

export const selectCurrentHistoryIndex = (state: RootState) =>
  state.grid.currentHistoryIndex
export const selectActionHistory = (state: RootState) => state.grid.actionHistory

export const selectSelectedTile = (state: RootState) => state.grid.selectedTile
export const selectCreditChange = (state: RootState) =>
  state.grid.selectedTile?.creditChange
