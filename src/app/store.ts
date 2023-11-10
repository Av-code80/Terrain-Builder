import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { terrainSlice } from "../features/terrain/terrainSlice"
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from "react-redux"

export const store = configureStore({
  reducer: {
    grid: terrainSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector