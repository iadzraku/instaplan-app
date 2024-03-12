import Image from "next/image";

const ProfileImage = () => {
  return (
    <Image
      src="/profile-pic.jpg"
      alt="Profile"
      width={100}
      height={100}
      className="w-8 h-8 rounded-full"
    />
  );
};

export default ProfileImage;
