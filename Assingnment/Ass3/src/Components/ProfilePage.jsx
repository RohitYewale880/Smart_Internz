import React from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileDetails from "./ProfileDetails";
import img from "../Assets/profile.png";

const ProfilePage = () => {
  const user = {
    name: "Prasad Vasant Mali",
    email: "maliprasad1311@gmail.com",
    bio: "My name is Prasad Vasant Mali. I am currently pursuing a Master of Computer Applications (MCA) and specialize in building dynamic, user-friendly web applications. My technical expertise includes JavaScript, React, and Node.js, with hands-on experience in developing web platforms like car booking systems and freelance job marketplaces. I am also proficient in integrating APIs, creating responsive designs, and ensuring smooth user experiences through my knowledge of frameworks like Material UI.",
    image: img,
  };

  return (
    <>
      <ProfilePicture image={user.image} />
      <ProfileDetails name={user.name} email={user.email} bio={user.bio} />
    </>
  );
};

export default ProfilePage;
