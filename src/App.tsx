import Controls from "./components/Controls/Controls"
import Grid from "./components/Grid/Grid"
import History from "./components/History/History"
import Layout from "./components/Layout/Layout"

function App() {
  return (
    <div className="app">
     <Layout>
       <Controls />
       <Grid />
       <History />
       </Layout>
    </div>
  )
}

export default App
