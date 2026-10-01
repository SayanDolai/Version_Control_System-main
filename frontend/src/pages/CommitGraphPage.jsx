

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import CommitGraph from "../components/CommitGraph";

function CommitGraphPage() {

  return (
    <div className="app">

      <Header />

      <div className="main-layout">

        <SideBar />

        <main className="content">

          <div className="graph-page">

            {/* =====================
                PAGE HEADER
            ====================== */}

            <div className="graph-page-header">

              <div>

                <h2>
                  Commit Graph
                </h2>

                <p>
                  Visualize the history of your repository.
                </p>

              </div>

              <div className="graph-stats">

                <span>
                  6 commits
                </span>

                <span>
                  2 branches
                </span>

              </div>

            </div>


            {/* =====================
                GRAPH
            ====================== */}

            <section className="graph-card">

              <div className="graph-card-header">

                <span>
                  Repository History
                </span>

                <span className="graph-current-branch">
                  🌿 main
                </span>

              </div>

              <CommitGraph />

            </section>

          </div>

        </main>

      </div>

    </div>
  );
}

export default CommitGraphPage;