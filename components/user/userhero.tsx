import useUser from "@/hooks/useUser";
import Image from "next/image";
import Avatar from "./avatar";

type Props = {
  userId: string;
};

function UserHero({ userId }: Props) {
  const { data: fetchedUser } = useUser(userId);

  return (
    <div>
      <div className="bg-neutral-700 h-44 relative">
        {fetchedUser?.coverImage && (
          <Image
            src={fetchedUser.coverImage}
            fill
            alt="cover image"
            className="object-fill"
          />
        )}

        <div className="absolute -bottom-16 left-4">
          <Avatar userId={userId} isLarge hasBorder />
        </div>
      </div>
    </div>
  );
}

export default UserHero;
