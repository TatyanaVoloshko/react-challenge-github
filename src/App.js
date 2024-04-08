import React, { useState } from "react";
import "./App.css";
import GithubData from "./components/githubData/GithubData";
import UserInfo from "./components/users/UserInfo";

function App() {
  const [userInfoVisible, setUserInfoVisible] = useState(false);

  return (
    <div className="App">
      {userInfoVisible ? (
        <UserInfo setUserInfoVisible={setUserInfoVisible} />
      ) : (
        <>
          <UserInfo setUserInfoVisible={setUserInfoVisible} />
          <GithubData />
        </>
      )}
    </div>
  );
}

export default App;
