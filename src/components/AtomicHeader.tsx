"use client";

import { CounterAtoms } from "@/lib/atoms";
import { useAtomValue } from "jotai";

const AtomicHeader = () => {
	const count = useAtomValue(CounterAtoms);
	return (
		<>
			<h1 className="text-center text-lg">
				Counter Value: <span className="font-semibold">{count}</span>
			</h1>
		</>
	);
};

export default AtomicHeader;
