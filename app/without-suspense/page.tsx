import Users from "@/components/users";
import Posts from "@/components/posts";

export default function WithoutSuspense() {
  return (
    <>
      <h2>Without Suspense</h2>

      <div style={{ display: "flex" }}>
        <Users />
        <Posts />
      </div>
    </>
  );
}
