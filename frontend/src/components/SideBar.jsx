

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-title">
        REPOSITORY
      </div>

      <nav className="sidebar-menu">

        <button className="sidebar-item active">
          <span>📁</span>
          Files
        </button>

        <button className="sidebar-item">
          <span>◉</span>
          Commits
        </button>

        <button className="sidebar-item">
          <span>🌿</span>
          Branches
        </button>

        <button className="sidebar-item">
          <span>↔</span>
          Changes
        </button>

        <button className="sidebar-item">
          <span>⚙</span>
          Settings
        </button>

      </nav>

    </aside>
  );
}

export default Sidebar;