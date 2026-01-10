"use client";

import { CircleMinusIcon, CirclePlusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const AdvanceCounter = () => {
	const [counter, setCounter] = useState(0);

	const plus = () => {
		setCounter(counter + 1);
	};
	const plusTen = () => {
		setCounter(counter + 10);
	};

	const minus = () => {
		setCounter(counter - 1);
	};
	const minusTen = () => {
		setCounter(counter - 10);
	};

	return (
		<div className="grid place-items-center gap-4">
			<h1 className="text-lg">
				Counter Value: <span className="font-semibold">{counter}</span>
			</h1>

			<div className="grid grid-cols-2 gap-4">
				<Button
					onClick={minus}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinusIcon /> Minus 1
				</Button>
				<Button
					onClick={plus}
					variant={"default"}
					className="cursor-pointer">
					<CirclePlusIcon /> Plus 1
				</Button>

				<Button
					variant={"destructive"}
					onClick={minusTen}
					className="cursor-pointer">
					<CircleMinusIcon /> Minus 10
				</Button>
				<Button
					variant={"default"}
					onClick={plusTen}
					className="cursor-pointer">
					<CirclePlusIcon /> Plus 10
				</Button>
			</div>
		</div>
	);
};

export default AdvanceCounter;
