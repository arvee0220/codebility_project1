import { Button } from "@nextui-org/button";

const buttonText = [
	{ text: "Email Me", color: "text-slate-950", border: "border-transparent", bg: "bg-slate-300" },
	{
		text: "Save Contact",
		color: "text-neutral-300",
		border: "border-white",
		bg: "bg-transparent",
	},
];

function Buttons() {
	return (
		<div className="flex justify-center items-center">
			<div className="flex justify-center items-center w-full md:w-2/3 p-4 gap-4">
				{buttonText.map((button, idx) => (
					<Button
						key={idx}
						radius="full"
						size="lg"
						fullWidth={true}
						className={`${button.bg} ${button.border} ${button.color} border-1 min-w-40 text-lg`}
					>
						{button.text}
					</Button>
				))}
			</div>
		</div>
	);
}

export default Buttons;
