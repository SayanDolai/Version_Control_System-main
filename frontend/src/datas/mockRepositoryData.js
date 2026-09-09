const repository = {
  name: "Version_Control_System",
  description: "A Git-like version control system implemented in C++",

  currentBranch: "main",

  stats: {
    commits: 12,
    branches: 3,
    contributors: 1,
  },

  commits: [
    {
      hash: "a81f2c",
      message: "Initial commit",
      author: "Sayan",
      time: "2 hours ago",
    },

    {
      hash: "b72e41",
      message: "Implement object storage",
      author: "Sayan",
      time: "5 hours ago",
    },

    {
      hash: "c91d32",
      message: "Add branch support",
      author: "Sayan",
      time: "Yesterday",
    },

    {
      hash: "d82f17",
      message: "Implement staging area",
      author: "Sayan",
      time: "2 days ago",
    },
  ],
};

export default repository;