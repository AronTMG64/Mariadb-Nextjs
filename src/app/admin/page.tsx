import { getUsers } from "@/utils/getUsers"
import { User } from "../api/login/route";
import DeleteUsers from "../components/DeleteUsers";
import AddProducts from "../components/AddProducts";

export default async function admin() {
  const users: User[] = await getUsers() as User[];

  return (
    <div className="flex h-screen w-full p-5">
      <div className="w-1/3 h-full bg-slate-400 p-5">
        <DeleteUsers users={users} />
      </div>
      <div className=" w-2/3 h-full bg-slate-300 p-5 flex justify-center flex-col items-center">
        <AddProducts />
      </div>
    </div>
  );
};