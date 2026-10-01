
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import CommitList from "../components/CommitList";

import commits from "../datas/mockCommits";

function Commits() {
  const navigate = useNavigate();

  const handleCommitClick = (commit) => {
    navigate(`/repo/commit/${commit.hash}`);
  };

  return (
    <div className="app">

      <Header />

      <div className="layout">

        <Sidebar />

        <main className="main-content">

          <div className="page-breadcrumb">
            Version_Control_System / Commits
          </div>

          <CommitList
            commits={commits}
            onCommitClick={handleCommitClick}
          />

        </main>

      </div>

    </div>
  );
}

export default Commits;