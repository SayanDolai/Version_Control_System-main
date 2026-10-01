

import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/SideBar";

import commits from "../datas/mockCommits";

function CommitDetails() {

  const navigate = useNavigate();

  const { hash } = useParams();

  const commit = commits.find(
    (item) => item.hash === hash
  );

  if (!commit) {
    return (
      <div className="app">

        <Header />

        <div className="layout">

          <Sidebar />

          <main className="main-content">

            <h2>Commit not found</h2>

            <button
              onClick={() => navigate("/repo/commits")}
            >
              Back to commits
            </button>

          </main>

        </div>

      </div>
    );
  }

  return (
    <div className="app">

      <Header />

      <div className="layout">

        <Sidebar />

        <main className="main-content">

          <button
            className="back-button"
            onClick={() => navigate("/repo/commits")}
          >
            ← Back to commits
          </button>

          <div className="commit-details">

            <div className="commit-details-header">

              <h1>
                {commit.message}
              </h1>

              <div className="commit-full-hash">
                {commit.hash}
              </div>

            </div>

            <div className="commit-author">

              <div className="commit-avatar">
                S
              </div>

              <div>

                <strong>
                  {commit.author}
                </strong>

                <p>
                  {commit.email}
                </p>

              </div>

            </div>

            <div className="commit-date">
              Committed on {commit.date}
            </div>

            <div className="commit-parent">

              <span>
                Parent
              </span>

              {commit.parents.length > 0 ? (

                <button
                  onClick={() =>
                    navigate(
                      `/repo/commit/${commit.parents[0]}`
                    )
                  }
                >
                  {commit.parents[0]}
                </button>

              ) : (
                <span className="root-commit">
                  Root commit
                </span>
              )}

            </div>

            <div className="changes-section">

              <div className="changes-header">

                <h2>
                  Changes
                </h2>

                <span>
                  {commit.changes.length} files
                </span>

              </div>

              <div className="changes-list">

                {commit.changes.map((change) => (

                  <div
                    className="change-item"
                    key={change.file}
                  >

                    <span
                      className={`change-status ${change.status}`}
                    >
                      {change.status === "added"
                        ? "+"
                        : change.status === "modified"
                        ? "M"
                        : "-"}
                    </span>

                    <span>
                      {change.file}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default CommitDetails;