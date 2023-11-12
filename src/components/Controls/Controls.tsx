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
    <div className="flex justify-around items-center p-4 rounded shadow-lg">
      <span className="gradient-shadow p-2 gradient-text text-lg">
        Credits: {credit}
      </span>
      <button
        className="gradient-btn water text-white py-2 px-4 rounded transition duration-200"
        onClick={() => handleSelectItem("Water")}
      >
        Water
      </button>
      <button
        className="gradient-btn rock text-white py-2 px-4 rounded transition duration-200"
        onClick={() => handleSelectItem("Rock")}
      >
        Rock
      </button>
      <button
        className="gradient-btn house text-white py-2 px-4 rounded transition duration-200"
        onClick={() => handleSelectItem("House")}
      >
        House
      </button>
    </div>
  )
}

export default Controls
