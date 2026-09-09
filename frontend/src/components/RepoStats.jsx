

function RepositoryStats({ stats }) {
  return (
    <div className="stats-container">

      <div className="stat-card">
        <div className="stat-number">
          {stats.commits}
        </div>

        <div className="stat-label">
          Commits
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-number">
          {stats.branches}
        </div>

        <div className="stat-label">
          Branches
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-number">
          {stats.contributors}
        </div>

        <div className="stat-label">
          Contributors
        </div>
      </div>

    </div>
  );
}

export default RepositoryStats;