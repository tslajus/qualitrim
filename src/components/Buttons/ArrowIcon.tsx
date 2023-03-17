import {
  GoChevronRight as IconRight,
  GoChevronLeft as IconLeft,
} from "react-icons/go";

type Props = {
  direction: "left" | "right";
  label?: string;
  onClick?: () => void;
  small?: boolean;
};

function ArrowIcon({ direction, label, onClick, small = false }: Props) {
  if (direction === "right") {
    return (
      <button className={`arrow-icon ${small && "arrow-icon--small"}`}>
        <IconRight onClick={onClick} />
        <span className="sr-only">{`Next ${label}`}</span>
      </button>
    );
  }

  if (direction === "left") {
    return (
      <button className={`arrow-icon ${small && "arrow-icon--small"}`}>
        <IconLeft onClick={onClick} />
        <span className="sr-only">{`Previous ${label}`}</span>
      </button>
    );
  }

  return null;
}

export default ArrowIcon;
