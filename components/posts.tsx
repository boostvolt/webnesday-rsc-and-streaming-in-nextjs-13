import { Post } from "@/types/post";

async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return res.json();
}

export default async function Posts() {
  const posts: Post[] = await getPosts();

  return (
    <div style={{ padding: "0 50px 0 0" }}>
      <h2>Posts</h2>
      <ul style={{ padding: "0", listStyleType: "none" }}>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
