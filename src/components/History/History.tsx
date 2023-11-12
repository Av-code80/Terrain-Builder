import { useDispatch, useSelector } from "react-redux"
import {
  selectActionHistory,
  selectCurrentHistoryIndex,
} from "../../app/features/selector"
import { pushToHistory } from "../../app/features/slices/terrain/terrainSlice"

const History: React.FC = () => {
  const actionHistory = useSelector(selectActionHistory)
  const currentHistoryIndex = useSelector(selectCurrentHistoryIndex)

  const dispatch = useDispatch()

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
    <div className="p-4 max-h-screen overflow-auto gradient-border gradient-shadow">
      <h2 className="gradient-text text-xl font-semibold mb-4 animate-fadeIn">
        Action History
      </h2>
      <ul className="space-y-2 animate-slideIn">
        {actionHistory.map((entry, index) => (
          <li
            key={index}
            className={`text-indigo-900 p-2 cursor-pointer ${
              index === currentHistoryIndex
                ? "bg-green-100"
                : "hover:bg-gray-200"
            }`}
            onClick={() => handleHistoryClick(index)}
          >
            Action {index + 1}: {entry.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default History
