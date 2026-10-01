
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import DiffViewer from "../components/DiffViewer";

function Diff() {
  return (
    <div className="app">

      <Header />

      <div className="main-layout">

        <SideBar />

        <main className="content">

          <DiffViewer />

        </main>

      </div>

    </div>
  );
}

export default Diff;