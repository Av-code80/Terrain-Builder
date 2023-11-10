import { RootState } from "../store"

export const selectGrid = (state: RootState) => state.terrain.grid
export const selectCredit = (state: RootState) => state.terrain.credit
export const selectSelectedItem = (state: RootState) =>
  state.terrain.selectedItem

  export const selectCurrentHistoryIndex = (state: RootState) => state.terrain.currentHistoryIndex
  export const selectActionHistory = (state: RootState) => state.terrain.actionHistory

