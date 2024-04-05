import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserInfo() {
  const [username, setUsername] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      if (username.trim() !== "") {
        try {
          const response = await axios.get(
            `https://api.github.com/users/${username}`
          );
          setUserInfo(response.data);
        } catch (error) {
          console.error(error);
          setUserInfo(null);
        }
      } else {
        setUserInfo(null);
      }
    };

    getUserInfo();
  }, [username]);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={handleInputChange}
      />

      {userInfo && (
        <div>
          <img src={userInfo.avatar_url} alt={userInfo.login} className="Img" />
          <p className="List-item">
            <b>Fullname: </b>
            {userInfo.login}
          </p>
          <p className="List-item">
            <b>Username: </b>
            {userInfo.name}
          </p>
          <p className="List-item">
            <b>Location: </b>
            {userInfo.location}
          </p>
          <p >
            <b>Email Address: </b>
            {userInfo.email}
          </p>
        </div>
      )}
    </div>
  );
}
