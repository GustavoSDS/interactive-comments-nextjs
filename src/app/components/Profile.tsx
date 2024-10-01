import { IUser } from "@/models/User";
import Image from "next/image";

interface ProfileProps {
	user: IUser;
	createdAt: string;
	currentUser?: boolean;
}

export default async function Profile({
	user: users,
	currentUser,
	createdAt,
}: ProfileProps) {
	if (!users) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex items-center gap-2">
			<div className="flex items-center gap-4">
				<Image
					src={users.image.png}
					alt={users.username}
					className="rounded-full w-8 h-8"
					width={100}
					height={100}
				/>
				<p>{users.username}</p>
			</div>
			<div className="flex items-center gap-4">
				{currentUser && (
					<p className="text-sm bg-moderateBlue text-white px-2 rounded">you</p>
				)}
				<p className="text-grayishBlue">{createdAt}</p>
			</div>
		</div>
	);
}
