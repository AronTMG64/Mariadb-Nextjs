import React from 'react';
import { getUsers } from '@/utils/getUsers';
import Link from 'next/link';


type User = {
    id:number;
    name:string;
    email:string;
    password:string;
};

export default async function users() {
  const users:User[] = await getUsers() as User[];
  
  return (
    <div>
      {users.map((user) => ( 
        <><Link href={`/users/${user.id}`}>
          {user.name}
        </Link><br /></>
      ))}
    </div>
  );
};