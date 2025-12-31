import AdvanceCounter from "@/components/AdvanceCounter";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-3xs">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Advance Counter
					</CardTitle>
				</CardHeader>
				<CardContent>
					<AdvanceCounter />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
