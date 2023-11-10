import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  selectCredit,
  selectActionHistory,
  selectCurrentHistoryIndex,
  selectGrid,
} from "../../app/selector"
import { pushToHistory, redoAction, undoAction } from "../../features/terrain/terrainSlice"

const Dashboard: React.FC = () => {
    const dispatch = useDispatch()
  const grid = useSelector(selectGrid)
  const credit = useSelector(selectCredit)
  const currentHistoryIndex = useSelector(selectCurrentHistoryIndex)
  const actionHistory = useSelector(selectActionHistory)


  const handleUndoClick = () => {
    dispatch(undoAction())
  }

  const handleRedoClick = () => {
    dispatch(redoAction())
  }

 const handleHistoryClick = (index: number) => {
   if (index !== currentHistoryIndex) {
     const historyEntry = actionHistory[index]
     dispatch(pushToHistory(`Jumped to Action ${index + 1}`))
     dispatch({
       type: "terrain/setGridAndCreditFromHistory",
       payload: historyEntry,
     })
   }
 }

  return (
    <div className="flex flex-col items-center p-4">
      <div className="mb-4">
        <span className="text-lg font-semibold">Credit: {credit}</span>
      </div>
      <div className="flex space-x-2 mb-4">
        <button
          onClick={handleUndoClick}
          className="bg-red-500 text-white py-2 px-4 rounded shadow"
        >
          Previous
        </button>
        <button
          onClick={handleRedoClick}
          className="bg-green-500 text-white py-2 px-4 rounded shadow"
        >
          Next
        </button>
      </div>
      <div className="w-full max-h-64 overflow-auto">
        <ul>
          <p className="text-slate-600 pl-16 text-2xl font-bold">History</p>
          {actionHistory.map((entry, index) => (
            <li
              key={index}
              className={`text-sm p-2 cursor-pointer ${
                index === currentHistoryIndex ? "bg-blue-100" : ""
              }`}
              onClick={() => handleHistoryClick(index)}
            >
              Action {index + 1}: {entry.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
