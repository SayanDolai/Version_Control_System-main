

const graphData = [
  {
    hash: "a81f2c",
    message: "Implement branch support",
    author: "Sayan",
    time: "2 hours ago",
    branch: "main",
    lane: 0,
    parents: ["b72e41"],
    type: "commit",
  },

  {
    hash: "b72e41",
    message: "Implement commit objects",
    author: "Sayan",
    time: "5 hours ago",
    branch: "main",
    lane: 0,
    parents: ["c91d32"],
    type: "commit",
  },

  {
    hash: "e45a21",
    message: "Add object storage",
    author: "Sayan",
    time: "6 hours ago",
    branch: "feature/object-storage",
    lane: 1,
    parents: ["d91c42"],
    type: "commit",
  },

  {
    hash: "d91c42",
    message: "Implement blob objects",
    author: "Sayan",
    time: "7 hours ago",
    branch: "feature/object-storage",
    lane: 1,
    parents: ["c91d32"],
    type: "commit",
  },

  {
    hash: "c91d32",
    message: "Implement staging area",
    author: "Sayan",
    time: "Yesterday",
    branch: "main",
    lane: 0,
    parents: ["d82f17"],
    type: "commit",
  },

  {
    hash: "d82f17",
    message: "Initial commit",
    author: "Sayan",
    time: "2 days ago",
    branch: "main",
    lane: 0,
    parents: [],
    type: "commit",
  },
];

export default graphData;

