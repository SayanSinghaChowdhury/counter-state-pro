import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "./shadcnui/button";

const AtomicButton = () => {
	return (
		<>
			<div className="grid grid-cols-2 gap-4">
				<Button
					// onClick={minus}
					// disabled={counter <= 0}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinus /> Minus 1
				</Button>
				<Button
					// onClick={plus}
					// disabled={counter >= 100}
					variant={"default"}
					className="cursor-pointer">
					<CirclePlus /> plus 1
				</Button>

				<Button
					variant={"destructive"}
					// onClick={minusTen}
					// disabled={counter <= 9}
					className="cursor-pointer">
					<CircleMinus /> minus 10
				</Button>
				<Button
					variant={"default"}
					// onClick={plusTen}
					// disabled={counter >= 91}
					className="cursor-pointer">
					<CirclePlus /> plus 10
				</Button>
			</div>
		</>
	);
};

export default AtomicButton;
