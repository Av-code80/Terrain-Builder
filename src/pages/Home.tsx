import CurrentTileInfo from "../components/CurrentTileInfo/CurrentTileInfo"
import Controls from "../components/Controls/Controls"
import Dashboard from "../components/Dashboard/Dashboard"
import Grid from "../components/Grid/Grid"
import Layout from "./Layout"

function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-2 space-y-4">
        <CurrentTileInfo />
        <Controls />
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="lg:flex-none lg:pr-4 max-h-screen">
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

export default Home
