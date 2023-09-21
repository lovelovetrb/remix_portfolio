import { faSpotify, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Menu = {
  name: string;
  url: string;
};

type Props = {
  menuList: Menu[];
  isOpen: boolean;
};
const BurguerMenu = ({ menuList, isOpen }: Props) => {
  return (
    <div className="block md:hidden ">
      {isOpen && (
        <div className="absolute top-16 right-0 w-full h-full bg-black z-20">
          {menuList.map((item, index: number) => (
            <li className="text-center m-10 list-none" key={index}>
              <a className="cursor-pointer" href={item.url}>
                {item.name}
              </a>
            </li>
          ))}
          <p className="text-center m-10 text-md">
            <a href="https://twitter.com/lovelovetrb">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </p>
          <p className="text-center m-10 text-md">
            <a href="https://open.spotify.com/playlist/63Dbjp91jpIPPunSSFsV1j?si=zYn2u5EIQBORCH6bopKmxA&nd=1">
              <FontAwesomeIcon icon={faSpotify} />
            </a>
          </p>
          <p className="text-center m-10 text-md text-gray-500">
            <a href="https://github.com/lovelovetrb/remix_portfolio.git">
              code is here ...
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default BurguerMenu;
