import React, { useState, useEffect } from "react";
import axios from "axios";
import RepoUser from "../repouser/RepoUser";
import "./UserInfo.css"

export default function UserInfo({ setUserInfoVisible }) {
  const [username, setUsername] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      if (username.trim() !== "") {
        try {
          const response = await axios.get(
            `https://api.github.com/users/${username}`
          );
          setUserInfo(response.data);
          setError(null);
        } catch (error) {
          console.log(error);
          setUserInfo(null);
          setError("User not found");
        }
      } else {
        setUserInfo(null);
        setError(null);
      }
    };

    if (buttonClicked) {
      getUserInfo();
    }
  }, [username, buttonClicked]);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
    setUserInfoVisible(true);
  };

  return (
    <div className="Container">
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={handleInputChange}
        className="Input"
      />
      <button onClick={handleButtonClick} className="Btn">Get User Info</button>
      {error && <p>{error}</p>}
      {userInfo && (
        <div className="User">
          <img src={userInfo.avatar_url} alt={userInfo.login} className="Img" />
          <div>
            <p className="List-item">
            <b>Fullname: </b>
            {userInfo.login}
          </p>
          <hr className="Line" />
          <p className="List-item">
            <b>Username: </b>
            {userInfo.name}
          </p>
          <hr className="Line" />
          <p className="List-item">
            <b>Location: </b>
            {userInfo.location}
          </p>
          <hr className="Line" />
          <p>
            <b>Email Address: </b>
            {userInfo.email}
          </p>
          <hr className="Line" />
          </div>
          </div>
      )}
      {buttonClicked && <RepoUser username={username} />}
    </div>
  );
}
