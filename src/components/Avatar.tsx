import Avatar from "@/assets/images/avatar.png";
import Image from "next/image";

export default function AvatarComponent() {
  return (
    <>
      <Image
        src={Avatar}
        alt="Avatar"
        className="transition-transform duration-300 ease-in-out hover:scale-110 max-w-[300px] max-h-[300px]"
        priority
      />
    </>
  );
}
