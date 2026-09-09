

function RepositoryHeader({ repository }) {
  return (
    <div className="repository-header">

      <div>
        <h1>
          {repository.name}
        </h1>

        <p>
          {repository.description}
        </p>
      </div>

      <div className="repository-actions">

        <button className="branch-button">
          🌿 {repository.currentBranch}
          <span>▼</span>
        </button>

        <button className="new-button">
          + New
        </button>

      </div>

    </div>
  );
}

export default RepositoryHeader;