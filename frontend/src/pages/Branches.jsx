
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import BranchList from "../components/BranchList";

function Branches() {
  return (
    <div className="app">
      <Header />

      <div className="main-layout">
        <SideBar />

        <main className="content">
          <BranchList />
        </main>
      </div>
    </div>
  );
}

export default Branches;