"use client";
import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const AdvanceCounter = () => {
	const [counter, setcounter] = useState(0);

	const plus = () => {
		setcounter(counter + 1);
	};
	const plusTen = () => {
		setcounter(counter + 10);
	};

	const minus = () => {
		setcounter(counter - 1);
	};
	const minusTen = () => {
		setcounter(counter - 10);
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
						variant={"destructive"}
						className="cursor-pointer">
						<CircleMinus /> Minus 1
					</Button>
					<Button
						onClick={plus}
						variant={"default"}
						className="cursor-pointer">
						<CirclePlus /> plus 1
					</Button>

					<Button
						variant={"destructive"}
						onClick={minusTen}
						className="cursor-pointer">
						<CircleMinus /> minus 10
					</Button>
					<Button
						variant={"default"}
						onClick={plusTen}
						className="cursor-pointer">
						<CirclePlus /> plus 10
					</Button>
				</div>
			</div>
		</>
	);
};

export default AdvanceCounter;
