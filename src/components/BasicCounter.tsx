import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "./shadcnui/button";

const BasicCounter = () => {
	return (
		<div className="grid place-items-center gap-4">
			<h1 className="text-lg">
				Counter Value: <span className="font-semibold">0</span>
			</h1>

			<div className="grid grid-cols-2 gap-4">
				<Button
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinus /> Minus
				</Button>
				<Button
					variant={"default"}
					className="cursor-pointer">
					<CirclePlus /> Plus
				</Button>
			</div>
		</div>
	);
};

export default BasicCounter;
