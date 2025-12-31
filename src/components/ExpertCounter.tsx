"use client";
import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const ExpertCounter = () => {
	const [counter, setcounter] = useState(0);

	const plus = () => {
		if (counter < 100) {
			setcounter(counter + 1);
		}
	};
	const plusTen = () => {
		if (counter <= 91) {
			setcounter(counter + 10);
		}
	};

	const minus = () => {
		if (counter > 0) {
			setcounter(counter - 1);
		}
	};
	const minusTen = () => {
		if (counter > 9) {
			setcounter(counter - 10);
		}
	};
	return (
		<>
			<div className="grid place-items-center gap-4">
				<h1 className="text-lg">
					Counter Value: <span className="font-semibold">{counter}</span>
				</h1>

				<div className="grid grid-cols-2 gap-4">
					<Button
						onClick={minus}
						disabled={counter <= 0}
						variant={"destructive"}
						className="cursor-pointer">
						<CircleMinus /> Minus 1
					</Button>
					<Button
						onClick={plus}
						disabled={counter >= 100}
						variant={"default"}
						className="cursor-pointer">
						<CirclePlus /> plus 1
					</Button>

					<Button
						variant={"destructive"}
						onClick={minusTen}
						disabled={counter <= 9}
						className="cursor-pointer">
						<CircleMinus /> minus 10
					</Button>
					<Button
						variant={"default"}
						onClick={plusTen}
						disabled={counter >= 91}
						className="cursor-pointer">
						<CirclePlus /> plus 10
					</Button>
				</div>
			</div>
		</>
	);
};

export default ExpertCounter;
