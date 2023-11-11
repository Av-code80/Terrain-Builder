import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedItem } from "../../app/features/slices/terrain/terrainSlice"
import { selectCredit } from "../../app/features/selector"

const Controls: React.FC = () => {
  const dispatch = useDispatch()
  const credit = useSelector(selectCredit)

  const handleSelectItem = (itemType: "Water" | "Rock" | "House") => {
    dispatch(setSelectedItem(itemType))
  }

  return (
    <div className="flex justify-around items-center p-4 bg-white rounded shadow space-x-2">
      <span className="text-lg font-semibold">Credits: {credit}</span>
      <button className="btn blue" onClick={() => handleSelectItem("Water")}>
        Water
      </button>
      <button className="btn gray" onClick={() => handleSelectItem("Rock")}>
        Rock
      </button>
      <button className="btn yellow" onClick={() => handleSelectItem("House")}>
        House
      </button>
    </div>
  )
}

export default Controls
