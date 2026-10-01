
function CommitItem({ commit, onClick, isLast }) {
  return (
    <div
      className="commit-history-item"
      onClick={() => onClick(commit)}
    >

      <div className="commit-timeline">

        <div className="commit-dot">
          ●
        </div>

        {!isLast && (
          <div className="commit-line"></div>
        )}

      </div>

      <div className="commit-history-content">

        <div className="commit-title">
          {commit.message}
        </div>

        <div className="commit-information">

          <span className="commit-hash">
            {commit.hash}
          </span>

          <span>
            {commit.author}
          </span>

          <span>
            {commit.timestamp}
          </span>

        </div>

      </div>

    </div>
  );
}

export default CommitItem;