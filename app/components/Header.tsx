import type { HeaderMenu } from "~/types";
import BurguerMenu from "~/components/BurgerMenu";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faSpotify,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const menuList: HeaderMenu[] = [
  {
    content: "Works",
    url: "/works",
  },
  {
    content: "Skills",
    url: "/skills",
  },
  {
    content: "Contact",
    url: "/form",
  },
  {
    content: <FontAwesomeIcon icon={faGithub} />,
    url: "https://github.com/lovelovetrb",
  },
  {
    content: <FontAwesomeIcon icon={faTwitter} />,
    url: "https://twitter.com/lovelovetrb",
  },
  {
    content: <FontAwesomeIcon icon={faSpotify} />,
    url: "https://open.spotify.com/playlist/63Dbjp91jpIPPunSSFsV1j?si=zYn2u5EIQBORCH6bopKmxA&nd=1",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="flex items-center justify-between absolute z-20 p-5 text-xl lg:text-2xl bg-black w-screen ">
        <div className="flex justify-between items-center w-full">
          <h2 className="lg:text-3xl">
            <a className="cursor-pointer" href="/">
              @ lovelovetrb
            </a>
          </h2>
          <div className="block md:hidden">
            <img
              src="/hamburger.png"
              alt="hamburger"
              onClick={toggle}
              className="w-[28px] h-[28px]"
            />
          </div>
        </div>
        <nav>
          <ul className="hidden md:flex">
            {menuList.map((item, index: number) => (
              <li className="px-1 lg:px-3" key={index}>
                <a className="cursor-pointer" href={item.url}>
                  {item.content}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <BurguerMenu menuList={menuList} isOpen={isOpen} />
    </>
  );
};

export default Header;
