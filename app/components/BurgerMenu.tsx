import type { HeaderMenu } from "~/types";

type Props = {
	menuList: HeaderMenu[];
	isOpen: boolean;
};
const BurguerMenu = ({ menuList, isOpen }: Props) => {
	return (
		<div className="block md:hidden ">
			{isOpen && (
				<div className="absolute top-16 right-0 z-20 w-screen h-screen bg-black">
					{menuList.map((item, index: number) => (
						<li className="text-center m-10 list-none" key={index}>
							<a className="cursor-pointer" href={item.url}>
								{item.content}
							</a>
						</li>
					))}
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
