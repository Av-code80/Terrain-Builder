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
    <div className="flex justify-center mb-2">
      <div className="flex justify-around w-1/3 items-center">
        <div className="">
          <span className="text-lg font-semibold">Credit: {credit}</span>
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4  rounded shadow"
          onClick={() => handleSelectItem("Water")}
        >
          Water
        </button>
        <button
          className="bg-gray-500 text-white py-2 px-4   rounded shadow"
          onClick={() => handleSelectItem("Rock")}
        >
          Rock
        </button>
        <button
          className="bg-yellow-500 text-white py-2 px-4 rounded shadow"
          onClick={() => handleSelectItem("House")}
        >
          House
        </button>
      </div>
    </div>
  )
}

export default Controls
