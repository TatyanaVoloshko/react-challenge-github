import "./App.css";
import GithubData from "./components/githubData/GithubData";
import RepoData from "./components/repoData/RepoData";

function App() {
  return (
    <div className="App">
      <GithubData />
      <RepoData />
    </div>
  );
}

export default App;
