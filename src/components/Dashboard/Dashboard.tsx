import React from "react"
import { useDispatch } from "react-redux"
import { redoAction, undoAction } from "../../features/slices/grid/gridSlice"
import History from "../History/History"

/**
 * 
 * @Dashboard component to let to redo and undo actions.
 * 
 */
const Dashboard: React.FC = () => {
  const dispatch = useDispatch()

  const handleUndoClick = () => {
    dispatch(undoAction())
  }

  const handleRedoClick = () => {
    dispatch(redoAction())
  }
  return (
    <div className="max-h-screen mt-10 overflow-auto">
      <div className="flex justify-around mb-4">
        <button onClick={handleUndoClick} className="gradient-button-red">
          Undo
        </button>
        <button onClick={handleRedoClick} className="gradient-button-purple">
          Redo
        </button>
      </div>
      <History />
    </div>
  )
}

export default Dashboard
