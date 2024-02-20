import SectionHeading from "./SectionHeading";
import FeaturedCardSlider from "./FeaturedCardSlider";

export default function FeaturedProperties({ rooms }) {
  return (
    <div>
      <SectionHeading heading={"Featured"} subHeading={"Properties"} />

      <FeaturedCardSlider rooms={rooms} />
    </div>
  );
}
