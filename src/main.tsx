import React from "react"
import { createRoot } from "react-dom/client"
import { store } from "./app/features/store"
import { Provider } from "react-redux"
import App from "./App"
import "./tailwind.css"

const container = document.getElementById("root")

if (container !== null) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  )
}
