import { useState } from "react";
import branchesData from "../datas/mockBranches";
import BranchItem from "./BranchItem";

function BranchList() {
  const [branches, setBranches] = useState(branchesData);

  const [showCreateForm, setShowCreateForm] = useState(false);

  const [newBranchName, setNewBranchName] = useState("");

  const handleSwitch = (branch) => {
    setBranches((prevBranches) =>
      prevBranches.map((item) => ({
        ...item,
        current: item.name === branch.name,
      }))
    );
  };

  const handleDelete = (branch) => {
    const confirmed = window.confirm(
      `Delete branch "${branch.name}"?`
    );

    if (!confirmed) return;

    setBranches((prevBranches) =>
      prevBranches.filter(
        (item) => item.name !== branch.name
      )
    );
  };

  const handleCreateBranch = () => {
    const name = newBranchName.trim();

    if (!name) return;

    const alreadyExists = branches.some(
      (branch) => branch.name === name
    );

    if (alreadyExists) {
      alert("Branch already exists.");
      return;
    }

    const newBranch = {
      name,
      current: false,
      protected: false,
      latestCommit: branches.find(
        (branch) => branch.current
      )?.latestCommit || "000000",
      latestMessage: "Created from current branch",
      author: "Sayan",
      updated: "Just now",
      commits: 0,
    };

    setBranches((prevBranches) => [
      ...prevBranches,
      newBranch,
    ]);

    setNewBranchName("");
    setShowCreateForm(false);
  };

  return (
    <div className="branch-page">
      <div className="branch-header">
        <div>
          <h2>Branches</h2>

          <p>
            Manage branches for this repository
          </p>
        </div>

        <button
          className="create-branch-button"
          onClick={() =>
            setShowCreateForm(!showCreateForm)
          }
        >
          + New branch
        </button>
      </div>

      {showCreateForm && (
        <div className="create-branch-form">
          <input
            type="text"
            placeholder="Enter branch name..."
            value={newBranchName}
            onChange={(e) =>
              setNewBranchName(e.target.value)
            }
          />

          <button onClick={handleCreateBranch}>
            Create
          </button>

          <button
            className="cancel-button"
            onClick={() => {
              setShowCreateForm(false);
              setNewBranchName("");
            }}
          >
            Cancel
          </button>
        </div>
      )}

      <div className="branch-count">
        {branches.length} branches
      </div>

      <div className="branch-list">
        {branches.map((branch) => (
          <BranchItem
            key={branch.name}
            branch={branch}
            onSwitch={handleSwitch}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default BranchList;