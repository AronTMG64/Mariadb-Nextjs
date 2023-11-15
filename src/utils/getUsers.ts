import { db } from "./db";

export async function getUsers(){
    const data = await db.query('SELECT * FROM users')
    return Object.values(JSON.parse(JSON.stringify(data)))
};

export async function getUserById(id:string){
    const data = await db.query(`SELECT * FROM users where id = ${id}`);
    return Object.values(JSON.parse(JSON.stringify(data)))
};