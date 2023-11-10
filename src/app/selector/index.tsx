import { RootState } from "../store"

export const selectGrid = (state: RootState) => state.terrain.grid
export const selectCredit = (state: RootState) => state.terrain.credit
export const selectSelectedItem = (state: RootState) =>
  state.terrain.selectedItem


