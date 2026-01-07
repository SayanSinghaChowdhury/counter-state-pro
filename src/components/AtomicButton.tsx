"use client";

import { CounterAtoms } from "@/lib/atoms";
import { useAtom } from "jotai";
import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "./shadcnui/button";

const AtomicButton = () => {
	const [count, setCount] = useAtom(CounterAtoms);
	const plus = () => {
		if (count < 100) {
			setCount(count + 1);
		}
	};

	const plusTen = () => {
		if (count <= 90) {
			setCount(count + 10);
		}
	};

	const minus = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	const minusTen = () => {
		if (count > 9) {
			setCount(count - 10);
		}
	};
	return (
		<>
			<div className="grid grid-cols-2 gap-4">
				<Button
					onClick={minus}
					disabled={count <= 0}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinus /> Minus 1
				</Button>
				<Button
					onClick={plus}
					disabled={count >= 100}
					variant={"default"}
					className="cursor-pointer">
					<CirclePlus /> plus 1
				</Button>

				<Button
					variant={"destructive"}
					onClick={minusTen}
					disabled={count <= 9}
					className="cursor-pointer">
					<CircleMinus /> minus 10
				</Button>
				<Button
					variant={"default"}
					onClick={plusTen}
					disabled={count >= 91}
					className="cursor-pointer">
					<CirclePlus /> plus 10
				</Button>
			</div>
		</>
	);
};

export default AtomicButton;
