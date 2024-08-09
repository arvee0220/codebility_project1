import Image from "next/image";
import envelope from "../public/envelope_d.svg";
import facebook from "../public/facebook_d.svg";
import globe from "../public/globe_d.svg";
import messenger from "../public/messenger_d.svg";
import phone from "../public/phone_d.svg";
import twitter from "../public/twitter_d.svg";
import Link from "next/link";

type SocMedIcons = {
  img: string;
  socMed: string;
  link: string;
};

const svgIcons: SocMedIcons[] = [
  { img: envelope, socMed: "Email", link: "mailto:example@example.com" },
  { img: facebook, socMed: "Facebook", link: "https://www.facebook.com" },
  { img: globe, socMed: "Website", link: "" },
  { img: messenger, socMed: "Messenger", link: "https://www.messenger.com" },
  { img: phone, socMed: "Phone", link: "" },
  { img: twitter, socMed: "Twitter X", link: "https://twitter.com" },
];

const Icons: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 gap-5 p-2">
        {svgIcons.map((icons, idx) => (
          <Link
            key={idx}
            href={icons.link}
            className="flex justify-evenly"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={icons.img}
              alt="svg icons"
              width={20}
              height={20}
              key={idx}
            />
            <span className="hidden md:inline">{icons.socMed}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Icons;
