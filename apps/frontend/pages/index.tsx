import { User } from '@prisma/client';
import { useEffect, useState } from 'react';

export function Index() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Index;
