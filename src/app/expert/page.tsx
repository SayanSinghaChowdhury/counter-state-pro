import ExpertCounter from "@/components/ExpertCounter";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card>
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Expert Counter
					</CardTitle>
				</CardHeader>

				<CardContent>
					<ExpertCounter />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
