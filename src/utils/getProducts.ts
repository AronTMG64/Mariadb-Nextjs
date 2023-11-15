import { db } from "./db";

export async function getProducts(){
    const data = await db.query('SELECT * FROM products')
    return Object.values(JSON.parse(JSON.stringify(data)))
};

export async function getProductById(id:string){
    const data = await db.query(`SELECT * FROM products where id = ${id}`);
    return Object.values(JSON.parse(JSON.stringify(data)))
};