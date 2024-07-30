import Image from "next/image";
import Profile from "../public/random_user.jpg";

function ProfilePhoto() {
	return (
		<div className="flex justify-center">
			<div className="w-32 h-56 overflow-hidden rounded-full -mt-28 z-10">
				<Image
					src={Profile}
					height={448}
					width={256}
					alt="profile"
					className="object-cover w-full h-full"
				/>
			</div>
		</div>
	);
}

export default ProfilePhoto;
