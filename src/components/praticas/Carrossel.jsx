import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = () => {
  const slides = [
    {
      id: 1,
      content: 'Slide 1',
    },
    {
      id: 2,
      content: 'Slide 2',
    },
    {
      id: 3,
      content: 'Slide 3',
    },
  ];

  return (
    <AutoPlaySwipeableViews interval={3000}>
      {slides.map((slide) => (
        <div key={slide.id}>{slide.content}</div>
      ))}
    </AutoPlaySwipeableViews>
  );
};

export default Carousel;