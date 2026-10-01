
const commits = [
  {
    hash: "a81f2c",
    message: "Implement branch support",
    author: "Sayan",
    email: "sayan@example.com",
    timestamp: "2 hours ago",
    date: "September 10, 2026",
    parents: ["b72e41"],

    changes: [
      {
        status: "added",
        file: "src/branch.cpp",
      },
      {
        status: "added",
        file: "include/branch.h",
      },
      {
        status: "modified",
        file: "src/repository.cpp",
      },
    ],
  },

  {
    hash: "b72e41",
    message: "Implement commit objects",
    author: "Sayan",
    email: "sayan@example.com",
    timestamp: "5 hours ago",
    date: "September 10, 2026",
    parents: ["c91d32"],

    changes: [
      {
        status: "added",
        file: "src/commit.cpp",
      },
      {
        status: "added",
        file: "include/commit.h",
      },
    ],
  },

  {
    hash: "c91d32",
    message: "Implement staging area",
    author: "Sayan",
    email: "sayan@example.com",
    timestamp: "Yesterday",
    date: "September 9, 2026",
    parents: ["d82f17"],

    changes: [
      {
        status: "modified",
        file: "src/index.cpp",
      },
      {
        status: "added",
        file: "include/index.h",
      },
    ],
  },

  {
    hash: "d82f17",
    message: "Initial commit",
    author: "Sayan",
    email: "sayan@example.com",
    timestamp: "2 days ago",
    date: "September 8, 2026",
    parents: [],

    changes: [
      {
        status: "added",
        file: "README.md",
      },
      {
        status: "added",
        file: "CMakeLists.txt",
      },
      {
        status: "added",
        file: "src/main.cpp",
      },
    ],
  },
];

export default commits;