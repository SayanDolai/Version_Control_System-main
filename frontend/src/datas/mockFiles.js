

const fileTree = [
  {
    name: "src",
    path: "src",
    type: "directory",
    children: [
      {
        name: "main.cpp",
        path: "src/main.cpp",
        type: "file",
      },
      {
        name: "repository.cpp",
        path: "src/repository.cpp",
        type: "file",
      },
      {
        name: "object.cpp",
        path: "src/object.cpp",
        type: "file",
      },
      {
        name: "commit.cpp",
        path: "src/commit.cpp",
        type: "file",
      },
    ],
  },

  {
    name: "include",
    path: "include",
    type: "directory",
    children: [
      {
        name: "repository.h",
        path: "include/repository.h",
        type: "file",
      },
      {
        name: "object.h",
        path: "include/object.h",
        type: "file",
      },
    ],
  },

  {
    name: "README.md",
    path: "README.md",
    type: "file",
  },

  {
    name: "CMakeLists.txt",
    path: "CMakeLists.txt",
    type: "file",
  },
];

export default fileTree;