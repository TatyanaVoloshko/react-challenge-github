import React, { useEffect, useState } from "react";
import { getGithubData } from "../../api/githubDataApi";
import RepoData from '../repoData/RepoData'
import "./GithubData.css"

export default function GithubData() {
  const [githubDatas, setGithubDates] = useState([]);

  useEffect(() => {
    const fetchGithubDatas = async () => {
      try {
        const data = await getGithubData();
        if (data && typeof data === "object") {
          setGithubDates([data]);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchGithubDatas();
  }, []);

  return (
    <div className="Container">
      <ul>
        {githubDatas.map((giData, index) => (
          <li key={index} className="List">
            <img src={giData.avatar_url} alt={giData.login} className="Img" />
            <div className="List-container">
              <p className="List-item">
                <b>Fullname: </b>
                {giData.login}
              </p>
              <hr className="Line"/>
              <p className="List-item">
                <b>Username: </b>
                {giData.name}
              </p>
              <hr />
              <p className="List-item">
                <b>Location: </b>
                {giData.location}
              </p>
              <hr />
              <p className="List-item">
                <b>Email Address: </b>
                {giData.email}
              </p>
              <hr />
            </div>
          </li>
        ))}
      </ul>
    <RepoData />
    </div>
  );
}
