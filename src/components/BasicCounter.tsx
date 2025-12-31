"use client";

import { CircleMinus, CirclePlus } from "lucide-react";

import { useState } from "react";
import { Button } from "./shadcnui/button";

const BasicCounter = () => {
	const [counter, setcounter] = useState(0);

	const plus = () => {
		setcounter(counter + 1);
	};
	const minus = () => {
		setcounter(counter - 1);
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
					<CircleMinus /> Minus 1
				</Button>

				<Button
					onClick={plus}
					className="cursor-pointer">
					<CirclePlus /> Plus 1
				</Button>
			</div>
		</div>
	);
};

export default BasicCounter;
