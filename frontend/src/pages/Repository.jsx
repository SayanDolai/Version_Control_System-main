import { useState } from "react";

import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import RepositoryHeader from "../components/RepoHeader";
import RepositoryStats from "../components/RepoStats";
import RecentCommits from "../components/RecentCommits";

import FileExplorer from "../components/FileExplorer";
import FileViewer from "../components/FileViewer";

import repository from "../datas/mockRepositoryData";
import fileTree from "../datas/mockFiles";
import fileContents from "../datas/mockFileContent";

function Repository() {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  const handleCloseViewer = () => {
    setSelectedFile(null);
  };

  return (
    <div className="app">

      <Header />

      <div className="layout">

        <Sidebar />

        <main className="main-content">

          <RepositoryHeader
            repository={repository}
          />

          <RepositoryStats
            stats={repository.stats}
          />

          <div className="repository-workspace">

            <FileExplorer
              files={fileTree}
              onFileClick={handleFileClick}
            />

            <FileViewer
              file={selectedFile}
              content={
                selectedFile
                  ? fileContents[selectedFile.path] || "No content available."
                  : ""
              }
              onClose={handleCloseViewer}
            />

          </div>

          <RecentCommits
            commits={repository.commits}
          />

        </main>

      </div>

    </div>
  );
}

export default Repository;