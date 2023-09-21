import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

type Props = {
  lank: number;
};

const Star = ({ lank }: Props) => {
  return <div>{StarIcon(lank)}</div>;
};

function StarIcon(lank: number) {
  const maxLank = 5;
  const starIcon = [];
  for (let i = 0; i < maxLank; i++) {
    if (i < lank) {
      starIcon.push(<FontAwesomeIcon key={i} icon={faStar} color="yellow" />);
    } else {
      starIcon.push(<FontAwesomeIcon key={i} icon={faStar} color="gray" />);
    }
  }
  return starIcon;
}

export default Star;
