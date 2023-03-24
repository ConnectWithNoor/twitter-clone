import useUser from "@/hooks/userUser";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

type Props = {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
};

const Avatar = ({ userId, isLarge, hasBorder }: Props) => {
  const { data: fetcheduser } = useUser(userId);
  const router = useRouter();

  const onClick = useCallback(
    (e: any) => {
      e.stopPropagation();

      const url = `/users/${userId}`;

      router.push(url);
    },
    [router, userId]
  );
  return (
    <div
      className={`${hasBorder ? "border-4 border-black" : ""} ${
        isLarge ? "h-32 " : "h-12 "
      }${isLarge ? "w-3 " : "w-12 "}
      rounded-full hover:opacity-90 transition cursor-pointer relative
      `}
    >
      <Image
        fill
        className="object-fill rounded-full"
        alt="Avatar"
        onClick={onClick}
        src={fetcheduser?.profileImage || "/images/avatar.png"}
      />
    </div>
  );
};

export default Avatar;
