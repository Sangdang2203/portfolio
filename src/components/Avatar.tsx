import Avatar from "@/assets/images/avatar.png";
import Image from "next/image";

export default function AvatarComponent() {
  return (
    <>
      <Image
        src={Avatar}
        alt="Avatar"
        width={400}
        height={400}
        className="transition-transform duration-300 ease-in-out hover:scale-110 w-auto h-auto"
      />
    </>
  );
}
