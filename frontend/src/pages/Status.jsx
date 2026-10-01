
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import RepositoryStatus from "../components/RepositoryStatus";

function Status() {
  return (
    <div className="app">

      <Header />

      <div className="main-layout">

        <SideBar />

        <main className="content">
          <RepositoryStatus />
        </main>

      </div>

    </div>
  );
}

export default Status;