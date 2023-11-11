import React from "react"
import { useDispatch } from "react-redux"
import {
  redoAction,
  undoAction,
} from "../../app/features/slices/terrain/terrainSlice"
import History from "../History/History"

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
      <div className="flex justify-between mb-4">
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
