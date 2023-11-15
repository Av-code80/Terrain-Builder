import { useDispatch, useSelector } from "react-redux"
import {
  selectActionHistory,
  selectCurrentHistoryIndex,
} from "../../features/selector"
import { gridSlice } from "../../features/slices/grid"


/**
 * @History component to display and manage action history.
 */

const History: React.FC = () => {
  const actionHistory = useSelector(selectActionHistory)
  const currentHistoryIndex = useSelector(selectCurrentHistoryIndex)
  const dispatch = useDispatch()

  const handleHistoryClick = (index: number) => {
    if (index !== currentHistoryIndex) {
      const historyEntry = actionHistory[index]
  dispatch(gridSlice.actions.setGridAndCreditFromHistory(historyEntry))
    }
  }

  return (
    <div className="p-4 max-h-screen overflow-auto gradient-border gradient-shadow">
      <h2 className="gradient-text lg:text-xl 2xs:text-center 2xs:text-2xl font-semibold mb-4 animate-fadeIn">
        Action History
      </h2>
      <ul className="space-y-2 animate-slideIn lg:text-left 2xs:text-center">
        {actionHistory.map((entry, index) => {
          const key = `action-${index}-${entry.description.replace(
            /\s+/g,
            "-",
          )}`
          return (
            <li
              key={key}
              className={`text-purple-900 p-2 cursor-pointer ${
                index === currentHistoryIndex
                  ? "bg-green-100"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => handleHistoryClick(index)}
            >
              Action {index + 1}: {entry.description}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default History
