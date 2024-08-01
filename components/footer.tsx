import React from "react";
import Image from "next/image";
import BrandLogo from "../public/brand_logo.svg";

const Footer: React.FC = () => {
	return (
		<footer className="text-center text-white py-6">
			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center">
					<Image src={BrandLogo} alt="Brand Icon" width={20} height={20} />
					<h5 className="font-bold text-lg mt-2">Profit Pioneer</h5>
					<p className="text-sm text-gray-500">
						&copy; 2024 ZwiftTech. All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
