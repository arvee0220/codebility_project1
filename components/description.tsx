import Image from "next/image";

type SvcImage = {
	imageUrl: string;
};

const services: SvcImage[] = [
	{
		imageUrl:
			"https://images.unsplash.com/photo-1554260570-c7068c223285?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		imageUrl:
			"https://images.unsplash.com/photo-1583752028088-91e3e9880b46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		imageUrl:
			"https://images.unsplash.com/photo-1613442301239-ea2478101ea7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		imageUrl:
			"https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		imageUrl:
			"https://images.unsplash.com/photo-1483129804960-cb1964499894?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		imageUrl:
			"https://images.unsplash.com/photo-1625236239092-8d15fbff5420?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

const Description: React.FC = () => {
	return (
		<div className="px-5 md:px-10 md:mx-10">
			<h1 className="text-center text-[50px]">Profit Pioneer</h1>
			<h3 className="py-2">Company Background</h3>
			<p className="py-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio expedita
				sunt aliquam obcaecati fugit error dolores velit voluptatum nulla, esse aut corporis
				animi enim adipisci dolorum quam aperiam nesciunt magnam doloremque mollitia a id?
				Eaque amet itaque nostrum voluptatum excepturi. Neque eum quasi voluptatum optio
				necessitatibus veritatis magni corrupti.
			</p>
			<h3 className="py-2">Our Services</h3>
			<p className="py-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iste quis accusamus
				ad provident odio non impedit enim hic. Mollitia?
			</p>
			<div className="flex justify-center items-center my-10">
				<div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-5">
					{services.map(({imageUrl}, idx) => (
						<div key={idx} className="relative w-32 h-32 md:w-48 md:h-48">
							<Image
								src={service.imageUrl}
								alt="services"
								layout="fill"
								objectFit="cover"
								className="rounded-lg"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Description;
