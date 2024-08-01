import Icons from "@/components/socMedIcons";
import CoverPhoto from "../components/coverPhoto";
import ProfilePhoto from "@/components/profilePhoto";
import Buttons from "@/components/buttons";
import Description from "@/components/description";

export default function Home() {
	return (
		<main className="min-h-screen">
			<CoverPhoto />
			<ProfilePhoto />
			<div className="text-center p-5">
				<h1 className="font-bold text-2xl">Hussain Watkins</h1>
				<h3 className="pt-2 font-bold text-neutral-300 text-lg">CEO</h3>
				<p className="text-sm text-gray-500">
					H.Wotkins@gmail.com <br /> <span>+639123456789</span>
				</p>
			</div>
			<Icons />
			<Buttons />
			<Description />
		</main>
	);
}
