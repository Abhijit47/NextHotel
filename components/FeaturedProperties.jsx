import FeaturedCardSlider from "./FeaturedCardSlider";
import SectionHeading from "./SectionHeading";

export default function FeaturedProperties({ rooms }) {
  return (
    <div>
      <SectionHeading heading={"Featured"} subHeading={"Properties"} />

      <FeaturedCardSlider rooms={rooms.data} />
    </div>
  );
}
