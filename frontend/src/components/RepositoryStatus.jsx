
import { useState } from "react";
import statusData from "../datas/mockStatus";
import StatusFile from "./StatusFile";

function RepositoryStatus() {
  const [unstagedFiles, setUnstagedFiles] = useState([
    ...statusData.modified,
    ...statusData.added,
    ...statusData.deleted,
  ]);

  const [stagedFiles, setStagedFiles] = useState([]);

  const handleStage = (file) => {
    setUnstagedFiles((files) =>
      files.filter((item) => item.path !== file.path)
    );

    setStagedFiles((files) => [...files, file]);
  };

  const handleUnstage = (file) => {
    setStagedFiles((files) =>
      files.filter((item) => item.path !== file.path)
    );

    setUnstagedFiles((files) => [...files, file]);
  };

  return (
    <div className="status-page">

      <div className="status-header">
        <div>
          <h2>Changes</h2>

          <p>
            Review and stage changes before committing.
          </p>
        </div>
      </div>

      {/* Staged Changes */}

      <section className="changes-section">

        <div className="changes-section-header">
          <div>
            <h3>Staged Changes</h3>

            <span>
              {stagedFiles.length} files
            </span>
          </div>
        </div>

        {stagedFiles.length === 0 ? (
          <div className="empty-changes">
            No staged changes
          </div>
        ) : (
          <div className="status-files">
            {stagedFiles.map((file) => (
              <StatusFile
                key={file.path}
                file={file}
                staged={true}
                onUnstage={handleUnstage}
                onStage={handleStage}
              />
            ))}
          </div>
        )}

      </section>

      {/* Unstaged Changes */}

      <section className="changes-section">

        <div className="changes-section-header">
          <div>
            <h3>Changes</h3>

            <span>
              {unstagedFiles.length} files
            </span>
          </div>

          {unstagedFiles.length > 0 && (
            <button
              className="stage-all-button"
              onClick={() => {
                setStagedFiles((files) => [
                  ...files,
                  ...unstagedFiles,
                ]);

                setUnstagedFiles([]);
              }}
            >
              Stage all
            </button>
          )}
        </div>

        {unstagedFiles.length === 0 ? (
          <div className="empty-changes">
            Working tree clean
          </div>
        ) : (
          <div className="status-files">
            {unstagedFiles.map((file) => (
              <StatusFile
                key={file.path}
                file={file}
                staged={false}
                onStage={handleStage}
                onUnstage={handleUnstage}
              />
            ))}
          </div>
        )}

      </section>

      {/* Commit */}

      <CommitBox
        stagedFiles={stagedFiles}
        setStagedFiles={setStagedFiles}
        setUnstagedFiles={setUnstagedFiles}
      />

    </div>
  );
}

function CommitBox({
  stagedFiles,
  setStagedFiles,
  setUnstagedFiles,
}) {
  const [message, setMessage] = useState("");

  const handleCommit = () => {
    if (stagedFiles.length === 0) {
      alert("No staged changes to commit.");
      return;
    }

    if (!message.trim()) {
      alert("Please enter a commit message.");
      return;
    }

    alert(`Commit created: ${message}`);

    setStagedFiles([]);
    setMessage("");
  };

  return (
    <section className="commit-box">

      <h3>Commit changes</h3>

      <textarea
        placeholder="Commit message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div className="commit-box-footer">

        <span>
          {stagedFiles.length} files staged
        </span>

        <button
          className="commit-button"
          onClick={handleCommit}
          disabled={stagedFiles.length === 0}
        >
          Commit changes
        </button>

      </div>

    </section>
  );
}

export default RepositoryStatus;