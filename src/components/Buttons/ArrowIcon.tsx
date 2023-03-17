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
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter") {
      onClick?.();
    }
  };

  if (direction === "right") {
    return (
      <button
        className={`arrow-icon ${small && "arrow-icon--small"}`}
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={handleKeyDown}
      >
        <IconRight />
        <span className="sr-only">{`Next ${label}`}</span>
      </button>
    );
  }

  if (direction === "left") {
    return (
      <button
        className={`arrow-icon ${small && "arrow-icon--small"}`}
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={handleKeyDown}
      >
        <IconLeft />
        <span className="sr-only">{`Previous ${label}`}</span>
      </button>
    );
  }

  return null;
}

export default ArrowIcon;
