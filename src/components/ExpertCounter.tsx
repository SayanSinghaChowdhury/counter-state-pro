"use client";

import { CircleMinusIcon, CirclePlusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const ExpertCounter = () => {
	const [counter, setCounter] = useState(0);

	const plus = () => {
		if (counter < 100) {
			setCounter(counter + 1);
		}
	};

	const plusTen = () => {
		if (counter <= 90) {
			setCounter(counter + 10);
		}
	};

	const minus = () => {
		if (counter > 0) {
			setCounter(counter - 1);
		}
	};

	const minusTen = () => {
		if (counter > 9) {
			setCounter(counter - 10);
		}
	};

	return (
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
					<CircleMinusIcon /> Minus 1
				</Button>
				<Button
					onClick={plus}
					disabled={counter >= 100}
					variant={"default"}
					className="cursor-pointer">
					<CirclePlusIcon /> Plus 1
				</Button>

				<Button
					variant={"destructive"}
					onClick={minusTen}
					disabled={counter <= 9}
					className="cursor-pointer">
					<CircleMinusIcon /> Minus 10
				</Button>
				<Button
					variant={"default"}
					onClick={plusTen}
					disabled={counter >= 91}
					className="cursor-pointer">
					<CirclePlusIcon /> Plus 10
				</Button>
			</div>
		</div>
	);
};

export default ExpertCounter;
