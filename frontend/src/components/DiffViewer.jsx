import { useState } from "react";
import diffData from "../datas/diffData";

function DiffViewer() {
  const [selectedFile, setSelectedFile] = useState(
    diffData.files[0]
  );

  const totalAdditions = diffData.files.reduce(
    (total, file) => total + file.additions,
    0
  );

  const totalDeletions = diffData.files.reduce(
    (total, file) => total + file.deletions,
    0
  );

  return (
    <div className="diff-page">

      {/* =========================
          HEADER
      ========================== */}

      <div className="diff-header">

        <div>
          <div className="diff-title-row">

            <h2>
              Diff Viewer
            </h2>

            <span className="diff-hash">
              {diffData.commit.hash}
            </span>

          </div>

          <p className="diff-message">
            {diffData.commit.message}
          </p>

          <div className="diff-meta">
            <span>
              {diffData.commit.author}
            </span>

            <span>•</span>

            <span>
              {diffData.commit.date}
            </span>
          </div>
        </div>


        <div className="diff-summary">

          <span className="files-changed">
            {diffData.files.length} files
          </span>

          <span className="additions">
            +{totalAdditions}
          </span>

          <span className="deletions">
            -{totalDeletions}
          </span>

        </div>

      </div>


      {/* =========================
          DIFF LAYOUT
      ========================== */}

      <div className="diff-layout">

        {/* FILE LIST */}

        <aside className="diff-file-list">

          <div className="diff-file-list-header">
            Changed files
          </div>

          {diffData.files.map((file) => (

            <div
              key={file.path}
              className={`diff-file-item ${
                selectedFile.path === file.path
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                setSelectedFile(file)
              }
            >

              <div className="diff-file-name">

                <span
                  className={`diff-status-icon ${file.status}`}
                >
                  {file.status === "added" && "A"}

                  {file.status === "modified" && "M"}

                  {file.status === "deleted" && "D"}
                </span>

                <span>
                  {file.path}
                </span>

              </div>


              <div className="diff-file-stats">

                <span className="additions">
                  +{file.additions}
                </span>

                <span className="deletions">
                  -{file.deletions}
                </span>

              </div>

            </div>

          ))}

        </aside>


        {/* DIFF CONTENT */}

        <main className="diff-content">

          <div className="diff-content-header">

            <div className="diff-path">
              {selectedFile.path}
            </div>

            <div className="diff-file-stats">

              <span className="additions">
                +{selectedFile.additions}
              </span>

              <span className="deletions">
                -{selectedFile.deletions}
              </span>

            </div>

          </div>


          <div className="code-diff">

            {selectedFile.lines.map(
              (line, index) => (

                <div
                  key={index}
                  className={`diff-line ${line.type}`}
                >

                  <div className="line-number old">
                    {line.oldLine || ""}
                  </div>

                  <div className="line-number new">
                    {line.newLine || ""}
                  </div>

                  <div className="line-marker">
                    {line.type === "added"
                      ? "+"
                      : line.type === "removed"
                      ? "-"
                      : " "}
                  </div>

                  <pre className="line-content">
                    {line.content}
                  </pre>

                </div>

              )
            )}

          </div>

        </main>

      </div>

    </div>
  );
}

export default DiffViewer;  