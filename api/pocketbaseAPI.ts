import PocketBase from "pocketbase";

let TOKEN = null
const pb = new PocketBase('http://127.0.0.1:8090')

const loginWithEmailAndPassword = async (email: string, password: string) => {
    return await pb.collection('users').authWithPassword(email, password)
}

export {
    loginWithEmailAndPassword,
}