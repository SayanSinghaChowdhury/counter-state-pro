import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "./shadcnui/button";

const ExpertCounter = () => {
	return (
		<>
			<div className="grid place-items-center gap-4">
				<h1 className="text-lg">
					Counter Value: <span className="font-semibold">{0}</span>
				</h1>

				<div className="grid grid-cols-2 gap-4">
					<Button
						// onClick={minus}
						variant={"destructive"}
						className="cursor-pointer">
						<CircleMinus /> Minus 1
					</Button>
					<Button
						// onClick={plus}
						variant={"default"}
						className="cursor-pointer">
						<CirclePlus /> plus 1
					</Button>

					<Button
						variant={"destructive"}
						// onClick={minusTen}
						className="cursor-pointer">
						<CircleMinus /> minus 10
					</Button>
					<Button
						variant={"default"}
						// onClick={plusTen}
						className="cursor-pointer">
						<CirclePlus /> plus 10
					</Button>
				</div>
			</div>
		</>
	);
};

export default ExpertCounter;
