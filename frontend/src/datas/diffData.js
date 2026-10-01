
const diffData = {
  commit: {
    hash: "a81f2c",
    message: "Implement branch support",
    author: "Sayan",
    date: "September 10, 2026",
  },

  files: [
    {
      path: "src/repository.cpp",
      status: "modified",
      additions: 2,
      deletions: 1,

      lines: [
        {
          type: "context",
          oldLine: 15,
          newLine: 15,
          content: 'void Repository::init() {',
        },
        {
          type: "removed",
          oldLine: 16,
          newLine: null,
          content: '    createDirectory(".mygit");',
        },
        {
          type: "added",
          oldLine: null,
          newLine: 16,
          content: '    createDirectory(".mygit/objects");',
        },
        {
          type: "added",
          oldLine: null,
          newLine: 17,
          content: '    createDirectory(".mygit/refs");',
        },
        {
          type: "context",
          oldLine: 17,
          newLine: 18,
          content: "}",
        },
      ],
    },

    {
      path: "src/branch.cpp",
      status: "added",
      additions: 8,
      deletions: 0,

      lines: [
        {
          type: "added",
          oldLine: null,
          newLine: 1,
          content: '#include "branch.h"',
        },
        {
          type: "added",
          oldLine: null,
          newLine: 2,
          content: "",
        },
        {
          type: "added",
          oldLine: null,
          newLine: 3,
          content: "Branch::Branch(const std::string& name)",
        },
        {
          type: "added",
          oldLine: null,
          newLine: 4,
          content: "    : name(name) {}",
        },
        {
          type: "added",
          oldLine: null,
          newLine: 5,
          content: "",
        },
        {
          type: "added",
          oldLine: null,
          newLine: 6,
          content: "std::string Branch::getName() const {",
        },
        {
          type: "added",
          oldLine: null,
          newLine: 7,
          content: "    return name;",
        },
        {
          type: "added",
          oldLine: null,
          newLine: 8,
          content: "}",
        },
      ],
    },

    {
      path: "include/branch.h",
      status: "added",
      additions: 7,
      deletions: 0,

      lines: [
        {
          type: "added",
          oldLine: null,
          newLine: 1,
          content: "#ifndef BRANCH_H",
        },
        {
          type: "added",
          oldLine: null,
          newLine: 2,
          content: "#define BRANCH_H",
        },
        {
          type: "added",
          oldLine: null,
          newLine: 3,
          content: "",
        },
        {
          type: "added",
          oldLine: null,
          newLine: 4,
          content: "#include <string>",
        },
        {
          type: "added",
          oldLine: null,
          newLine: 5,
          content: "",
        },
        {
          type: "added",
          oldLine: null,
          newLine: 6,
          content: "class Branch {",
        },
        {
          type: "added",
          oldLine: null,
          newLine: 7,
          content: "};",
        },
      ],
    },
  ],
};

export default diffData;