# Grook Control Version System

A lightweight Git-inspired Version Control System built using **Node.js**. This project demonstrates the core concepts behind distributed version control systems by implementing features such as repository initialization, object hashing, staging, commits, and commit history traversal.

## 🚀 Features

- Initialize a new repository (`.groot`)
- SHA-1 based object hashing
- Store file contents as objects
- Staging area (Index)
- Commit creation with timestamps and messages
- Parent commit tracking
- HEAD pointer management
- Commit history (Log)

---

## 🛠️ Tech Stack

- Node.js
- JavaScript (ES Modules)
- File System (`fs/promises`)
- Path Module
- Crypto Module (SHA-1 Hashing)

---

## 📂 Project Structure

```
Grook-ControlVersionSystem/
│
├── .groot/
│   ├── HEAD
│   ├── index
│   └── object/
│
├── Groot.mjs
├── sample.txt
├── package.json
└── README.md
```

---

## ⚙️ How It Works

### 1. Repository Initialization

Creates a hidden `.groot` directory containing:

- `HEAD` → Stores the latest commit hash.
- `index` → Acts as the staging area.
- `object/` → Stores hashed file objects and commit objects.

---

### 2. Adding Files

When a file is added:

- Reads the file contents.
- Generates a SHA-1 hash.
- Stores the contents inside `.groot/object/`.
- Updates the staging area.

---

### 3. Commit

A commit stores:

- Commit message
- Timestamp
- List of staged files
- Parent commit hash

After committing:

- A new commit hash is generated.
- `HEAD` points to the latest commit.
- Staging area is cleared.

---

### 4. Log

Traverses commits by following parent commit hashes until the initial commit is reached, displaying the complete commit history.

---

## 📖 Core Concepts Implemented

- Version Control
- Content Addressable Storage
- SHA-1 Hashing
- Linked Commit History
- File System Operations
- Repository Metadata
- Staging Area
- HEAD Pointer

---

## 🧠 Data Structures Used

- Arrays
- JSON Objects
- File-Based Storage
- Linked Commit Chain (Parent References)

---

## 🔄 Algorithms Used

- SHA-1 Hashing
- File Read/Write Operations
- Commit Chain Traversal
- Recursive Directory Creation
- Object Storage

---

## ▶️ Running the Project

### Clone the repository

```bash
git clone https://github.com/your-username/Grook-ControlVersionSystem.git
```

### Navigate into the project

```bash
cd Grook-ControlVersionSystem
```

### Install dependencies

```bash
npm install
```

### Run

```bash
node Groot.mjs
```

---

## 📌 Example Workflow

```text
Initialize Repository
        ↓
Create .groot Folder
        ↓
Add File
        ↓
Generate SHA-1 Hash
        ↓
Store Object
        ↓
Update Index
        ↓
Commit Changes
        ↓
Update HEAD
        ↓
View Commit Log
```

---

## 📚 Learning Outcomes

This project provides hands-on experience with:

- Internal working of Git
- Version control concepts
- Object-based storage
- Cryptographic hashing
- Commit graph implementation
- File system manipulation in Node.js

---

## 🔮 Future Improvements

- Branch support
- Checkout command
- Diff implementation
- Merge functionality
- Status command
- Remove (`rm`) command
- Restore previous commits
- Remote repository support

---

## 👨‍💻 Author

**Sayan Dolai**

Mechanical Engineering Undergraduate  
Indian Institute of Technology Kharagpur (IIT Kharagpur)

---

## ⭐ If you found this project useful, consider giving it a Star!