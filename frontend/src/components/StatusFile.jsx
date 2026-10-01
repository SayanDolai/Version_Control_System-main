
function StatusFile({ file, staged, onStage, onUnstage }) {
  return (
    <div className="status-file">
      <div className="status-file-info">
        <span className={`status-icon ${file.status}`}>
          {file.status === "modified" && "M"}
          {file.status === "added" && "A"}
          {file.status === "deleted" && "D"}
        </span>

        <span className="status-file-path">
          {file.path}
        </span>
      </div>

      {staged ? (
        <button
          className="unstage-button"
          onClick={() => onUnstage(file)}
        >
          Unstage
        </button>
      ) : (
        <button
          className="stage-button"
          onClick={() => onStage(file)}
        >
          Stage
        </button>
      )}
    </div>
  );
}

export default StatusFile;