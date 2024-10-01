import { connectToDatabase } from "@/libs/mongodb";
import User from "@/models/User";

async function loadUser() {
	await connectToDatabase();
	const user = await User.find();
	return user;
}

export const metadata = {
	title: "Home",
	description: "Home page of the app",
};

export default async function Home() {
	const user = await loadUser();
	
	return (
		<main className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-6xl font-bold">Welcome to my site!</h1>
			<pre>{JSON.stringify(user, null, 2)}</pre>
		</main>
	);
}
