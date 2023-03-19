type SwipeHandlerProps = {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
};

const swipeHandler = ({ onSwipeLeft, onSwipeRight }: SwipeHandlerProps) => {
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
    const swipeDistance = touchEndX - touchStartX;
    const minSwipeDistance = 30;
    if (Math.abs(swipeDistance) >= minSwipeDistance) {
      if (swipeDistance > 0) {
        onSwipeLeft();
      } else {
        onSwipeRight();
      }
    }
  };

  return {
    swipeLeft: handleTouchStart,
    swipeRight: handleTouchEnd,
  };
};

export default swipeHandler;
