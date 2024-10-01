import User from "@/models/User";
import { connectToDatabase } from "./mongodb";

export async function loadUser() {
	await connectToDatabase();
	return await User.findOne();
}

export async function loadUsers() {
	await connectToDatabase();
	return await User.find();
}

export async function loadUserById(id: string) {
	await connectToDatabase();
	return await User.findById(id);
}

export async function loadUserByUsername(username: string) {
	await connectToDatabase();
	return await User.findOne({ username });
}