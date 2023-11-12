import React from "react"
import Controls from "./components/Controls/Controls"
import CurrentTileInfo from "./components/CurrentTileInfo/CurrentTileInfo"
import Dashboard from "./components/Dashboard/Dashboard"
import Grid from "./components/Grid/Grid"
import Layout from "./components/Layout/Layout"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


function App() {
  return (
    <Layout>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container mx-auto px-4 py-2 space-y-4">
        <CurrentTileInfo />
        <Controls />
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="lg:flex-none lg:w-1/4 lg:pr-4 max-h-screen overflow-auto">
            <Dashboard />
          </div>
          <div className="flex-grow">
            <Grid />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
