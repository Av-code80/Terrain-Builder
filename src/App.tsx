import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Home />
    </div>
  )
}

export default App
