import AtomicButton from "@/components/AtomicButton";
import AtomicHeader from "@/components/AtomicHeader";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";

const page = () => {
	return (
		<>
			<section className="grid h-[90dvh] place-items-center">
				<Card>
					<CardHeader>
						<CardTitle className="text-center text-2xl font-semibold">
							Atomic Counter
						</CardTitle>
					</CardHeader>

					<CardContent className="space-y-4">
						<AtomicHeader />
						<AtomicButton />
					</CardContent>
				</Card>
			</section>
		</>
	);
};

export default page;
