import React from 'react';
import { getUserById } from '@/utils/getUsers';

type Params = {
  params: {
    id: string;
  };
};

type UserProp = {
  id?: number;
  name: string;
  email: string;
  password: string;
};

export default async function userId({params}:Params) {
  const user: UserProp[] = await getUserById(params.id) as UserProp[];
  console.log(user);
  return (
    <div>User:{params.id}
      <br /> {user[0].name}
      <br /> {user[0].email}
    </div>
  );
};
