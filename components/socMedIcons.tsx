import Image from "next/image";
import envelope from "../public/envelope_d.svg";
import facebook from "../public/facebook_d.svg";
import globe from "../public/globe_d.svg";
import messenger from "../public/messenger_d.svg";
import phone from "../public/phone_d.svg";
import twitter from "../public/twitter_d.svg";

const svgIcons: string[] = [envelope, facebook, globe, messenger, phone, twitter];

const Icons: React.FC = () => {
	return (
		<div className="flex justify-center items-center">
			<div className="grid grid-cols-3 gap-5 p-2">
				{svgIcons.map((icons, idx) => (
					<Image src={icons} alt="svg icons" width={20} height={20} key={idx} />
				))}
			</div>
		</div>
	);
};

export default Icons;
