import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";

import SidebarLogo from "./sidebarLogo";
import SidebarItem from "./sidebarItem";
import SidebarTweetButton from "./sidebarTweetButton";

import useCurrentUser from "@/hooks/useCurrentUser";

function Sidebar() {
  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      id: 0,
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      id: 1,
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
      auth: true,
    },
    {
      id: 2,
      label: "Profile",
      href: "/user/123",
      icon: FaUser,
      auth: true,
    },
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg-w-[230px]">
          <SidebarLogo />
          {items.map((item) => {
            return (
              <SidebarItem
                key={item.id}
                href={item.href}
                label={item.label}
                icon={item.icon}
                auth={item.auth}
              />
            );
          })}

          {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              icon={BiLogOut}
              href={"/"}
              label="Logout"
            />
          )}

          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
