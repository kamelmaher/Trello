import BoardsContainer from "./BoardsContainer"
import Header from "./Header"
type DashboardProps = {
    showSideBar: boolean,
    handleSideBar: (e: boolean) => void
}
const Dashboard = ({ showSideBar, handleSideBar }: DashboardProps) => {
    return (
        <div className="dashboard">
            <Header showSideBar={showSideBar} handleSideBar={handleSideBar} />
            <BoardsContainer />
        </div>
    )
}

export default Dashboard
