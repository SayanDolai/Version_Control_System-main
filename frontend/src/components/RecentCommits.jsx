

function RecentCommits({ commits }) {
  return (
    <section className="commits-section">

      <div className="section-header">
        <h2>Recent Commits</h2>

        <button className="view-all">
          View all
        </button>
      </div>

      <div className="commit-list">

        {commits.map((commit) => (

          <div
            className="commit-item"
            key={commit.hash}
          >

            <div className="commit-icon">
              ●
            </div>

            <div className="commit-content">

              <div className="commit-message">
                {commit.message}
              </div>

              <div className="commit-meta">
                <span className="commit-hash">
                  {commit.hash}
                </span>

                <span>
                  {commit.author}
                </span>

                <span>
                  {commit.time}
                </span>
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default RecentCommits;