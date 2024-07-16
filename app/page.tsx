import Image from "next/image";
import Profile from "../public/random_user.jpg";

export default function Home() {
	return (
		<main>
			<div>Cover Photo</div>
			<div>Profile</div>

			<div className="w-32 h-56 overflow-hidden rounded-full">
				<Image
					src={Profile}
					height={448}
					width={256}
					alt="profile"
					className="object-cover w-full h-full"
				/>
			</div>
		</main>
	);
}
