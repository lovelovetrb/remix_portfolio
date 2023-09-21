import type { V2_MetaFunction } from "@remix-run/node";
import Background from "~/components/background";
import { works } from "~/data/works";
import WorkCard from "~/components/WorkCard";

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
        <h2 className="lg:text-5xl md:text-3xl text-2xl m-5">Works...</h2>
        <div className="flex flex-col">
          {works.map((work) => (
            <WorkCard key={work.title} work={work} />
          ))}
        </div>
      </Background>
    </>
  );
}
