
function BranchItem({ branch, onSwitch, onDelete }) {
  return (
    <div className="branch-item">
      <div className="branch-main">
        <div className="branch-name">
          <span className="branch-icon">🌿</span>

          <span>{branch.name}</span>

          {branch.current && (
            <span className="current-badge">
              Current
            </span>
          )}

          {branch.protected && (
            <span className="protected-badge">
              Protected
            </span>
          )}
        </div>

        <div className="branch-commit">
          <span className="commit-hash">
            {branch.latestCommit}
          </span>

          <span>{branch.latestMessage}</span>
        </div>

        <div className="branch-meta">
          <span>{branch.author}</span>
          <span>•</span>
          <span>{branch.updated}</span>
          <span>•</span>
          <span>{branch.commits} commits</span>
        </div>
      </div>

      <div className="branch-actions">
        {!branch.current && (
          <button
            className="branch-switch"
            onClick={() => onSwitch(branch)}
          >
            Switch
          </button>
        )}

        {!branch.current && !branch.protected && (
          <button
            className="branch-delete"
            onClick={() => onDelete(branch)}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default BranchItem;