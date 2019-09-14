import React, { useState } from "react";
import UserProfileCard from "./UserProfileCard";
import UserFollowers from "./UserFollowers";

const UserProfile = ({ user, followers }) => {
  const [query, setQuery] = useState("");

  const handleChange = e => {
    const inputQuery = e.target.value;

    setQuery(inputQuery);
  };

  return (
    <div className="card_container">
      <UserProfileCard user={user} />
      <UserFollowers
        user={user}
        followers={followers}
        handleChange={handleChange}
        query={query}
      />
    </div>
  );
};

export default UserProfile;
