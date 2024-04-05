import "./App.css";
import GithubData from "./components/githubData/GithubData";
import RepoData from "./components/repoData/RepoData";
import UserInfo from "./components/users/UserInfo";

function App() {


  return (
    <div className="App">
     
      <GithubData />
      <RepoData />
      <UserInfo />
    </div>
  );
}

export default App;
