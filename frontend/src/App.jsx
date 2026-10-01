import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Repository from "./pages/Repository";
import Commits from "./pages/Commits";
import CommitDetails from "./pages/CommitDetails";
import Branches from "./pages/Branches";
import Diff from "./pages/Diff";
import CommitGraphPage from "./pages/CommitGraphPage";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <Navigate
              to="/repo"
              replace
            />
          }
        />

        <Route
          path="/repo"
          element={<Repository />}
        />

        <Route
          path="/repo/commits"
          element={<Commits />}
        />

        <Route
          path="/repo/commit/:hash"
          element={<CommitDetails />}
        />

        <Route
          path="/repo/branches"
          element={<Branches />}
        />

        <Route
          path="/repo/diff"
          element={<Diff />}
        />

        <Route
          path="/repo/graph"
          element={<CommitGraphPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;