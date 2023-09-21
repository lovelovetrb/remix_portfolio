import type { V2_MetaFunction } from "@remix-run/node";
import Background from "~/components/background";
import SkillCard from "~/components/SkillCard";
import { skills } from "~/data/skills";

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
        <h2 className="lg:text-5xl md:text-3xl text-2xl m-5">Skills...</h2>
        <div className="flex flex-wrap">
          {skills.map((skill) => {
            return <SkillCard key={skill.name} skill={skill} />;
          })}
        </div>
      </Background>
    </>
  );
}
