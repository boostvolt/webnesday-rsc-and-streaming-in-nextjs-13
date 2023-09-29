import { User } from "@/types/user";

async function getUsers() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=10"
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return res.json();
}

export default async function Users() {
  const users: User[] = await getUsers();

  return (
    <div style={{ padding: "0 50px 0 0" }}>
      <h2>Users</h2>
      <ul style={{ padding: "0", listStyleType: "none" }}>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
