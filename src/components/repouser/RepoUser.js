import axios from "axios";
import React, { useEffect, useState } from "react";

export default function RepoUser({ username }) {
  const [userRepos, setUserRepos] = useState([]);
  const [userInfoLoaded, setUserInfoLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserRepo = async () => {
      if (!username) {
        return;
      }

      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        setUserRepos(response.data);
        setUserInfoLoaded(true);
        setError(null);
      } catch (error) {
        setError("Error fetching repositories");
        console.log(error);
      }
    };

    getUserRepo();
  }, [username]);

  return (
    <div>
      {error && <p>{error}</p>}
      {userInfoLoaded ? (
        <ul className="List-repo">
          <h2>User Repositories</h2>
          {userRepos.map((userRepo, index) => (
            <li key={index}>
              <p>
                <span className="Name-repo">{userRepo.name}: </span>
                <span>{userRepo.description}</span>
              </p>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
