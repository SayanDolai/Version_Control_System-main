

import { useNavigate } from "react-router-dom";
import graphData from "../datas/mockGraph";

function CommitGraph() {

  const navigate = useNavigate();

  const handleCommitClick = (commit) => {
    navigate(`/repo/commit/${commit.hash}`);
  };

  return (
    <div className="commit-graph-container">

      {graphData.map((commit, index) => {

        const hasNextCommit =
          index < graphData.length - 1;

        return (
          <div
            key={commit.hash}
            className="graph-row"
          >

            {/* =====================
                GRAPH AREA
            ====================== */}

            <div className="graph-column">

              {/* Vertical line */}

              {hasNextCommit && (
                <div className="graph-line" />
              )}

              {/* Commit node */}

              <button
                className="commit-node"
                onClick={() =>
                  handleCommitClick(commit)
                }
                title={`View ${commit.hash}`}
              />

            </div>


            {/* =====================
                COMMIT INFORMATION
            ====================== */}

            <div
              className="graph-commit"
              onClick={() =>
                handleCommitClick(commit)
              }
            >

              <div className="graph-commit-top">

                <span className="graph-message">
                  {commit.message}
                </span>

                <span className="graph-hash">
                  {commit.hash}
                </span>

              </div>


              <div className="graph-commit-bottom">

                <span>
                  {commit.author}
                </span>

                <span>
                  •
                </span>

                <span>
                  {commit.time}
                </span>

              </div>

            </div>


            {/* =====================
                BRANCH
            ====================== */}

            <div className="graph-branch">

              <span
                className={`branch-label ${
                  commit.branch === "main"
                    ? "main"
                    : "feature"
                }`}
              >
                {commit.branch}
              </span>

            </div>

          </div>
        );
      })}

    </div>
  );
}

export default CommitGraph;