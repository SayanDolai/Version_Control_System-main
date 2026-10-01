import {
  useLocation,
  useNavigate,
} from "react-router-dom";

function SideBar() {

  const navigate = useNavigate();

  const location = useLocation();


  const isFilesActive =
    location.pathname === "/repo";


  const isCommitsActive =
    location.pathname === "/repo/commits" ||
    location.pathname.startsWith(
      "/repo/commit/"
    );


  const isBranchesActive =
    location.pathname === "/repo/branches";


  const isDiffActive =
    location.pathname === "/repo/diff";


  const isGraphActive =
    location.pathname === "/repo/graph";


  return (
    <aside className="sidebar">


      {/* FILES */}

      <div
        className={`sidebar-item ${
          isFilesActive ? "active" : ""
        }`}
        onClick={() =>
          navigate("/repo")
        }
      >
        <span>📁</span>

        <span>
          Files
        </span>
      </div>


      {/* COMMITS */}

      <div
        className={`sidebar-item ${
          isCommitsActive ? "active" : ""
        }`}
        onClick={() =>
          navigate("/repo/commits")
        }
      >
        <span>🕘</span>

        <span>
          Commits
        </span>
      </div>


      {/* BRANCHES */}

      <div
        className={`sidebar-item ${
          isBranchesActive ? "active" : ""
        }`}
        onClick={() =>
          navigate("/repo/branches")
        }
      >
        <span>🌿</span>

        <span>
          Branches
        </span>
      </div>


      {/* DIFF */}

      <div
        className={`sidebar-item ${
          isDiffActive ? "active" : ""
        }`}
        onClick={() =>
          navigate("/repo/diff")
        }
      >
        <span>⇄</span>

        <span>
          Diff
        </span>
      </div>


      {/* GRAPH */}

      <div
        className={`sidebar-item ${
          isGraphActive ? "active" : ""
        }`}
        onClick={() =>
          navigate("/repo/graph")
        }
      >
        <span>⌘</span>

        <span>
          Graph
        </span>
      </div>

    </aside>
  );
}

export default SideBar;