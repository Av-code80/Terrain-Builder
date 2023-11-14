import { configureStore } from "@reduxjs/toolkit"
import terrainReducer from "../features/slices/grid/gridSlice"

export const store = configureStore({
  reducer: {
    grid: terrainReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
