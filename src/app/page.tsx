import { loadUserByUsername } from "@/libs/userData";
import Profile from "./components/Profile";

export const metadata = {
	title: "Home",
	description: "Home page of the app",
};


export default async function Home() {
	return (
		<main className="flex flex-col items-center justify-center">
			<Profile
				user={await loadUserByUsername("juliusomo")}
				currentUser={true}
				createdAt="1 month ago"
			/>
		</main>
	);
}
