import Dashboard from "./components/Dashboard/Dashboard"
import Sidebar from "./components/Sidebar"
import "./App.css"
import AppContextProvider from "./Context/AppContextProvider"
function App() {
  return (
    <div className="d-flex">
      <AppContextProvider>
        <Sidebar />
        <Dashboard />
      </AppContextProvider>
    </div>
  )
}

export default App
