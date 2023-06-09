import { Header, NotificationsFeed } from "@/components";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

function Notifications() {
  return (
    <>
      <Header label="Notifications" showBackArrow />
      <NotificationsFeed />
    </>
  );
}

export default Notifications;
