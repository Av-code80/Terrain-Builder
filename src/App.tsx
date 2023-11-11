import Controls from "./components/Controls/Controls"
import CurrentTileInfo from "./components/CurrentTileInfo/CurrentTileInfo"
import Dashboard from "./components/Dashboard/Dashboard"
import Grid from "./components/Grid/Grid"
import History from "./components/History/History"
import Layout from "./components/Layout/Layout"

function App() {
  return (
    <div className="app">
      <Layout>
        <CurrentTileInfo />
        <Controls />
        <Grid />
        <Dashboard />
        <History />
      </Layout>
    </div>
  )
}

export default App
