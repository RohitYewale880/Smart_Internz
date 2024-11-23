import React from "react";

const ProfileDetails = ({ name, email, bio }) => {
  return (
    <>
      <div class="info">
        <h2>{name}</h2>
        <h3>{email}</h3>
        <p>{bio}</p>
      </div>
    </>
  );
};

export default ProfileDetails;
