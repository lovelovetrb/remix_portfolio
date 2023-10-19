import type { V2_MetaFunction } from "@remix-run/node";
import Background from "~/components/Background";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

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
  const profile = [
    {
      title: "job",
      content: "College Student",
    },
    {
      title: "major",
      content: "informatics / Natural Language Proceccing",
    },
    {
      title: "age",
      content: `${new Date().getFullYear() - 2002} years old`,
    },
  ];

  return (
    <>
      <Background styleName="right">
        <div className="my-10 md:my-20 mx-1 p-3">
          <div className="flex mt-10 lg:mt-20 flex-col lg:flex-row">
            <img
              src="icon.jpeg"
              alt="icon"
              className="w-3/4 md:w-1/3 rounded-[50%] mx-auto"
            />
            <div className="mt-5 lg:ml-10 flex flex-col">
              <h2 className="lg:text-3xl text-xl mt-5 text-center lg:text-left">
                馬場 海好 (RISUman)
                <br className="block md:hidden" />
                <a
                  className="cursor-pointer text-xl ml-3"
                  href="https://twitter.com/lovelovetrb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  className="cursor-pointer text-xl  ml-3"
                  href="https://github.com/lovelovetrb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  className="cursor-pointer text-xl  ml-3"
                  href="https://lovelovetrb.fanbox.cc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faCircleInfo} />
                </a>
              </h2>
              <table className="mt-5 lg:mt-10">
                <tbody>
                  {profile.map((item) => (
                    <tr key={item.title} className="text-md lg:text-lg">
                      <td className="p-3">{item.title}</td>
                      <td className="p-3">{item.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Background>
    </>
  );
}
