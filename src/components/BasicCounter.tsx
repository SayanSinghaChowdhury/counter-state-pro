"use client";

import { CircleMinusIcon, CirclePlusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const BasicCounter = () => {
	const [counter, setCounter] = useState(0);

	const plus = () => {
		setCounter(counter + 1);
	};
	const minus = () => {
		setCounter(counter - 1);
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
					className="cursor-pointer">
					<CirclePlusIcon /> Plus 1
				</Button>
			</div>
		</div>
	);
};

export default BasicCounter;
