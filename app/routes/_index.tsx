import type { V2_MetaFunction } from "@remix-run/node";
import Background from "~/components/Background";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

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
  const calcAge = () => {
    const birthday = new Date("2002/5/29");
    const today = new Date();

    let age = today.getFullYear() - birthday.getFullYear();

    // 誕生月より前の場合、または誕生月であっても日にちがまだ来ていない場合は1歳減らす
    if (
      today.getMonth() < birthday.getMonth() ||
      (today.getMonth() === birthday.getMonth() &&
        today.getDate() < birthday.getDate())
    ) {
      age--;
    }

    return age;
  };

  const profile = [
    {
      title: "所属",
      content: "静岡大学大学院 情報学専攻(M1)",
    },
    {
      title: "年齢",
      content: `${calcAge()}歳`,
    },
    {
      title: "趣味",
      content: "サウナ・カメラ・釣り・FPVドローン",
    },
  ];

  const variant = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <Background styleName="right">
        <div className="my-10 md:my-20 mx-1 p-3">
          <div className="flex flex-col lg:flex-row">
            <div
              className="min-h-[225px] lg:min-w-[50%] min-w-[200px] rounded-[50%] mx-auto relative text-center"
            >
              <AnimatePresence>
                <motion.img
                  key="icon"
                  src="icon.jpeg"
                  variants={variant}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  transition={{ duration: 0.25 }}
                  className="min-h-[200px] w-auto lg:h-[90%] rounded-[50%] absolute lg:left-1/2 lg:transform lg:translate-x-[-50%]"
                />
              </AnimatePresence>
            </div>
            <div className="lg:ml-10 flex flex-col">
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
                  href="https://risu-note.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faCircleInfo} />
                </a>
                <a
                  className="cursor-pointer text-xl  ml-3"
                  href="mailto:info@lovelovetrb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </h2>
              <p className="mt-5">
                自然言語処理を研究する研究室に所属している大学院生です。
                <br />
                言語モデルに対する解釈性の向上に対する研究を行っています。
                <br />
                機械学習・AIをはじめとした技術を用いて、様々な課題を解決することに興味があります。
              </p>
              <table className="mt-5 lg:mt-10">
                <thead className="text-xl">プロフィール</thead>
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
