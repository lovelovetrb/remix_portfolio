import BurguerMenu from "./BurgerMenu";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

type Menu = {
  name: string;
  url: string;
};

const menuList: Menu[] = [
  {
    name: "Works",
    url: "/works",
  },
  {
    name: "Skills",
    url: "/skills",
  },
  {
    name: "Contact",
    url: "/form",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className="flex items-center justify-between p-5 text-xl lg:text-2xl bg-black">
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
        <BurguerMenu menuList={menuList} isOpen={isOpen} />
        <ul className="hidden md:flex">
          {menuList.map((item, index: number) => (
            <li className="px-1 lg:px-3" key={index}>
              <a className="cursor-pointer" href={item.url}>
                {item.name}
              </a>
            </li>
          ))}
          <li className="px-1 lg:px-3">
            <a href="https://twitter.com/lovelovetrb">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="px-1 lg:px-3">
            <a href="https://open.spotify.com/playlist/63Dbjp91jpIPPunSSFsV1j?si=zYn2u5EIQBORCH6bopKmxA&nd=1">
              <FontAwesomeIcon icon={faSpotify} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
