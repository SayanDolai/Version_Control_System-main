
import FileItem from "./FIleItem";

function FileExplorer({ files, onFileClick }) {
  return (
    <div className="file-explorer">

      <div className="file-explorer-header">
        <h2>Files</h2>

        <span className="file-count">
          {files.length} items
        </span>
      </div>

      <div className="file-list">

        {files.map((item) => (
          <FileItem
            key={item.path}
            item={item}
            onFileClick={onFileClick}
          />
        ))}

      </div>

    </div>
  );
}

export default FileExplorer;