import React from "react"
import { useDispatch } from "react-redux"
import { setSelectedItem } from "../../features/terrain/terrainSlice";

const Controls: React.FC = () => {
  const dispatch = useDispatch()

  const handleSelectItem = (itemType: "water" | "rock" | "house") => {
    dispatch(setSelectedItem(itemType))
  }

  return (
    <div className="flex justify-around p-4">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded shadow"
        onClick={() => handleSelectItem("water")}
      >
        Water
      </button>
      <button
        className="bg-gray-500 text-white py-2 px-4 rounded shadow"
        onClick={() => handleSelectItem("rock")}
      >
        Rock
      </button>
      <button
        className="bg-yellow-500 text-white py-2 px-4 rounded shadow"
        onClick={() => handleSelectItem("house")}
      >
        House
      </button>
    </div>
  )
}

export default Controls
