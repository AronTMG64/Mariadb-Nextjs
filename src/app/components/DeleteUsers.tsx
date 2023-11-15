'use client'
import React from 'react'
import { User } from "@/app/api/login/route"


const DeleteUsers: React.FC<{users: User[]}> = ({users}) => {
  async function deleteUser(id: number) {
    await fetch('/api/delete', {method: 'DELETE', body: (JSON.stringify({id: id}))});
  };

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <button onClick={() => deleteUser(user.id)} className="bg-stone-900 text-slate-50">Delete user</button>
        </div>
      ))}
    </div>
  )
}
export default DeleteUsers;

