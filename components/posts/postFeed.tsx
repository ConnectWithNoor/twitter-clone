import usePosts from "@/hooks/usePosts";
import PostItem from "./postItem";

type Props = {
  userId?: string;
};

function PostFeed({ userId }: Props) {
  const { data: posts = [] } = usePosts(userId);

  return (
    <>
      {posts.map((post: Record<string, any>) => (
        <PostItem userId={userId} key={post.id} data={post} />
      ))}
    </>
  );
}

export default PostFeed;
