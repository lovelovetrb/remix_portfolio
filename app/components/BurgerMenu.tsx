import { useState } from "react";

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
        </div>
      )}
    </div>
  );
};

export default BurguerMenu;
