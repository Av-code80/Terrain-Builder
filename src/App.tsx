import Controls from "./components/Controls/Controls"
import Dashboard from "./components/Dashboard/Dashboard"
import Grid from "./components/Grid/Grid"
import History from "./components/History/History"
import Layout from "./components/Layout/Layout"

function App() {
  return (
    <div className="app">
     <Layout>
       <Controls />
       <Grid />
       <Dashboard />
       <History />
       </Layout>
    </div>
  )
}

export default App
