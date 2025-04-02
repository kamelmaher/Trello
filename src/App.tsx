import Dashboard from "./components/Dashboard/Dashboard"
import Sidebar from "./components/Sidebar"
import "./App.css"
import AppContextProvider from "./Context/AppContextProvider"
import { useState } from "react"
function App() {
  const [showSideBar, setShowSideBar] = useState(false)
  return (
    <div className="d-flex">
      <AppContextProvider>
        <Sidebar showSideBar={showSideBar} handleSideBar={(e: boolean) => setShowSideBar(e)} />
        <Dashboard showSideBar={showSideBar} handleSideBar={(e: boolean) => setShowSideBar(e)} />
      </AppContextProvider>
    </div>
  )
}

export default App
