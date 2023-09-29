import { Suspense } from "react";

import Users from "@/components/users";
import Posts from "@/components/posts";

export default function WithSuspense() {
  return (
    <>
      <h2>With Suspense</h2>

      <div style={{ display: "flex" }}>
        <Suspense fallback={<div>Loading users...</div>}>
          <Users />
        </Suspense>

        <Suspense fallback={<div>Loading posts...</div>}>
          <Posts />
        </Suspense>
      </div>
    </>
  );
}
