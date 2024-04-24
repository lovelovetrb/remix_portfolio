import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHome, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "./Slider";
import type { Image } from "../types";

type Work = {
  prize?: string;
  title: string;
  description: string;
  image: Image[];
  github?: string;
  twitter?: string;
  news?: string;
  demo?: string;
};

const WorkCard = ({ work }: { work: Work }) => {
  const prizeStyle = {
    top: 0,
    left: 0,
    zIndex: 1,
    background: "rgba(0,0,0,0.5)",
    color: "white",
    padding: "0.5rem",
  };

  return (
    <div className="bg-white bg-opacity-20 rounded-lg mx-auto my-5 p-5 w-11/12 relative">
      {work.prize && (
        <div style={prizeStyle} className="absolute text-sm md:text-md text-xl">
          {work.prize}
        </div>
      )}
      <div className={`${work.prize && "mt-10"}`}>
        <Slider images={work.image} />
      </div>
      <h2 className="my-3 lg:text-2xl text-2xl font-semibold">{work.title}</h2>
      <div className="my-3 lg:text-xl">{work.description}</div>
      <div className="flex justify-around mt-5">
        {work.demo && (
          <a href={work.demo} target="_blank" rel="noopener noreferrer">
            <div className="text-xl">
              <FontAwesomeIcon icon={faHome} />
            </div>
          </a>
        )}
        {work.github && (
          <a href={work.github} target="_blank" rel="noopener noreferrer">
            <div className="text-xl">
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </a>
        )}
        {work.news && (
          <a href={work.news} target="_blank" rel="noopener noreferrer">
            <div className="text-xl">
              <FontAwesomeIcon icon={faNewspaper} />
            </div>
          </a>
        )}
        {work.twitter && (
          <a href={work.twitter} target="_blank" rel="noopener noreferrer">
            <div className="text-xl">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkCard;
