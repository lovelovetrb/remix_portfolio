import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import type { Image } from "~/types";

const divStyle = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundSize: "cover",
};

const properties = {
	prevArrow: (
		<button className="mx-1 md:mx-3 md:text-2xl text-gray-700 text-opacity-50">
			◀︎
		</button>
	),
	nextArrow: (
		<button className="mx-1 md:mx-3 md:text-2xl text-gray-700 text-opacity-50">
			▶︎
		</button>
	),
};

type Props = {
	images: Image[];
};

const Slideshow = ({ images }: Props) => {
	return (
		<div>
			{images.length > 1 ? (
				<Slide {...properties}>
					{images.map((slideImage: Image, index: number) => (
						<div key={index} style={divStyle}>
							<img src={slideImage.src} alt={slideImage.alt} />
						</div>
					))}
				</Slide>
			) : (
				<div style={divStyle}>
					<img src={images[0].src} alt={images[0].alt} />
				</div>
			)}
		</div>
	);
};

export default Slideshow;
