import type { V2_MetaFunction } from "@remix-run/node";
import Background from "~/components/Background";
import WorkCard from "~/components/WorkCard";
import { papers } from "~/data/papers";
import { works } from "~/data/works";

export const meta: V2_MetaFunction = () => {
	return [
		{ title: "@lovelovetrb" },
		{
			name: "description",
			content: "@lovelovetrb portfolio page build with remix",
		},
	];
};

export default function Index() {
	return (
		<>
			<Background styleName="none">
				<h2 className="lg:text-5xl md:text-3xl text-2xl m-5">Activities...</h2>
				<h3 className="lg:text-4xl md:text-2xl text-xl m-5">Papers...</h3>
				<div className="flex flex-col">
					{papers.map((paper) => (
						<WorkCard key={paper.title} work={paper} />
					))}
				</div>
				<h3 className="lg:text-4xl md:text-2xl text-xl m-5">Works...</h3>
				<div className="flex flex-col">
					{works.map((work) => (
						<WorkCard key={work.title} work={work} />
					))}
				</div>
			</Background>
		</>
	);
}
