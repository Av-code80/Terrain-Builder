import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedItem } from "../../app/features/slices/terrain/terrainSlice"
import { selectCredit, selectCreditChange } from "../../app/features/selector"

const Controls: React.FC = () => {
  const dispatch = useDispatch()
  const credit = useSelector(selectCredit)
  const updatedCredit = useSelector(selectCreditChange)
  const [triggerPing, setTriggerPing] = useState(false)

  useEffect(() => {
    if (updatedCredit) {
      setTriggerPing(true)
    }
  }, [updatedCredit])

  const handleSelectItem = (itemType: "Water" | "Rock" | "House") => {
    dispatch(setSelectedItem(itemType))
  }

  return (
    <div className="flex md:justify-around xs:h-full xs:justify-between 2xs:flex-col xs:flex-row items-center p-4 rounded shadow-lg">
      <span
        key={credit}
        className={`gradient-shadow p-2 gradient-text text-lg 
      ${triggerPing ? "animate-ping" : ""} 2xs:mb-2`}
      >
        Credits: {credit}
      </span>
      <button
        className="gradient-btn water text-white py-2 px-6 rounded transition duration-200 flex items-center justify-center text-3xl 2xs:mb-2 xs:w-auto 2xs:w-2/3"
        onClick={() => handleSelectItem("Water")}
      >
        🌊
      </button>
      <button
        className="gradient-btn rock text-white py-2 px-6 rounded transition duration-200 flex items-center justify-center text-3xl 2xs:mb-2 xs:w-auto 2xs:w-2/3"
        onClick={() => handleSelectItem("Rock")}
      >
        🪨
      </button>
      <button
        className="gradient-btn house text-white py-2 px-6 rounded transition duration-200 flex items-center justify-center text-3xl xs:w-auto 2xs:w-2/3"
        onClick={() => handleSelectItem("House")}
      >
        🏠
      </button>
    </div>
  )
}

export default Controls
