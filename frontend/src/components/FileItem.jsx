function FileItem({ item, onFileClick, level = 0 }) {
  const isDirectory = item.type === "directory";

  return (
    <div>

      <div
        className="file-item"
        style={{
          paddingLeft: `${16 + level * 20}px`,
        }}
        onClick={() => {
          if (!isDirectory) {
            onFileClick(item);
          }
        }}
      >

        <span className="file-icon">
          {isDirectory ? "📁" : "📄"}
        </span>

        <span className="file-name">
          {item.name}
        </span>

      </div>

      {isDirectory && (
        <div>
          {item.children.map((child) => (
            <FileItem
              key={child.path}
              item={child}
              onFileClick={onFileClick}
              level={level + 1}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default FileItem;