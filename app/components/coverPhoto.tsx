import Image from "next/image";
import cover from "../../public/coverPhoto.jpg";

export default function CoverPhoto() {
	return (
		<div className="w-full relative" style={{ height: "25vh" }}>
			<Image src={cover} alt="cover photo" layout="fill" objectFit="cover" />
		</div>
	);
}
