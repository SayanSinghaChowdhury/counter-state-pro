"use client";

import { counterAtoms } from "@/lib/atoms";
import { useAtomValue } from "jotai";

const AtomicHeader = () => {
	const count = useAtomValue(counterAtoms);

	return (
		<h1 className="text-center text-lg">
			Counter Value: <span className="font-semibold">{count}</span>
		</h1>
	);
};

export default AtomicHeader;
