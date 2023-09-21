import Star from "./Star";

type Skill = {
  name: string;
  deviconClassName: string;
  lank: number;
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div className="bg-white bg-opacity-20 rounded-lg mx-auto mb-5 p-5 w-11/12 md:w-[calc(30%-10px)]">
      <div>
        <p
          className={`${skill.deviconClassName} lg:text-8xl text-7xl mx-auto text-center`}
        />
      </div>
      <div className="my-3 lg:text-2xl text-lg">{skill.name}</div>
      <div className="skill-card__lank">
        <Star lank={skill.lank} />
      </div>
    </div>
  );
};

export default SkillCard;
