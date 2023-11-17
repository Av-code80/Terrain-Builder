import { useDispatch, useSelector } from "react-redux"
import {
  placeItem,
  pushToHistory,
  removeItem,
  setSelectedTile,
} from "../../features/slices/grid/gridSlice"
import { selectCredit, selectSelectedItem } from "../../features/selector"
import { GridType } from "../types/interfaces"
import { useCallback } from "react"

export const useTileClickHandler = (grid: GridType[]) => {
  const dispatch = useDispatch()
  const selectedItem = useSelector(selectSelectedItem)
  const credit = useSelector(selectCredit)

  const handleTileClick = useCallback(
    (index: number) => {
      if (index < 0 || index >= grid.length) {
        throw new Error(`Invalid tile index: ${index}`)
      }
      const tileType = grid[index]
      let actionType = ""
      let creditChange = 0
      let description = ""

      if (tileType === "Grass" && selectedItem) {
        actionType = "Place"
        creditChange = selectedItem === "House" ? +5 : -3
        description = `Placed ${selectedItem} at position (${Math.floor(
          index / 10,
        )}, ${index % 10})`
        dispatch(placeItem({ index, item: selectedItem }))
      } else if (tileType !== "Grass" && credit >= 1) {
        actionType = "Remove"
        creditChange = tileType === "House" ? 5 : tileType === "Rock" ? -3 : 0
        description = `Removed ${tileType} at position (${Math.floor(
          index / 10,
        )}, ${index % 10})`

        dispatch(removeItem(index))
      }

      if (description) {
        dispatch(pushToHistory(description))
      }

      if (actionType) {
        dispatch(
          setSelectedTile({
            index: index,
            type: tileType,
            action: actionType,
            creditChange: creditChange,
          }),
        )
      }
    },
    [grid, dispatch, selectedItem, credit],
  )

  return handleTileClick
}
