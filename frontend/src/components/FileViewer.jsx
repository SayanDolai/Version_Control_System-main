

function FileViewer({ file, content, onClose }) {
  if (!file) {
    return (
      <div className="file-viewer empty-viewer">

        <div className="empty-icon">
          📄
        </div>

        <h3>Select a file</h3>

        <p>
          Select a file from the explorer to view its contents.
        </p>

      </div>
    );
  }

  const lines = content.split("\n");

  return (
    <div className="file-viewer">

      <div className="file-viewer-header">

        <div className="file-path">
          📄 {file.path}
        </div>

        <div className="viewer-actions">

          <button
            onClick={() => {
              navigator.clipboard.writeText(content);
            }}
          >
            Copy
          </button>

          <button onClick={onClose}>
            ✕
          </button>

        </div>

      </div>

      <div className="code-container">

        {lines.map((line, index) => (

          <div
            className="code-line"
            key={index}
          >

            <span className="line-number">
              {index + 1}
            </span>

            <code>
              {line || " "}
            </code>

          </div>

        ))}

      </div>

    </div>
  );
}

export default FileViewer;