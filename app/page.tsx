import CoverPhoto from "../components/coverPhoto";
import ProfilePhoto from "@/components/profilePhoto";

export default function Home() {
	return (
		<main>
			<CoverPhoto />
			<ProfilePhoto />
			<div className="text-center">
				<h1 className="font-bold ">Hussain Watkins</h1>
				<h3 className="pt-2 font-bold">CEO</h3>
				<p>
					H.Wotkins@gmail.com <br /> <span>+639123456789</span>
				</p>
			</div>
		</main>
	);
}
