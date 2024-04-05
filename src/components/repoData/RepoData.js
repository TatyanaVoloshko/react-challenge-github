import React, { useEffect, useState } from "react";
import { getRepo } from "../../api/githubDataApi";
import './RepoData.css'

export default function RepoData() {
  const [repoDatas, setRepoDates] = useState([]);

  useEffect(() => {
    const fetchRepoDatas = async () => {
      try {
          const data = await getRepo();
        if (data && typeof data === "object") {
          setRepoDates(data);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchRepoDatas();
  }, []);

  return (
    <div>
      <ul className="List-repo">
        <h2>User Repositories</h2>
        {repoDatas.map((giData, index) => (
          <li key={index}>
            <p>
              <span className="Name-repo">{giData.name}: </span>
              <span>{giData.description}</span>
           
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
