

import CommitItem from "./CommitItem";

function CommitList({ commits, onCommitClick }) {
  return (
    <div className="commit-history">

      <div className="commit-history-header">

        <div>
          <h2>Commit History</h2>

          <p>
            {commits.length} commits
          </p>
        </div>

        <button className="branch-filter">
          🌿 main ▼
        </button>

      </div>

      <div className="commit-history-list">

        {commits.map((commit, index) => (
          <CommitItem
            key={commit.hash}
            commit={commit}
            onClick={onCommitClick}
            isLast={index === commits.length - 1}
          />
        ))}

      </div>

    </div>
  );
}

export default CommitList;