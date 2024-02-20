import { testimonials } from "@/constants";

import SectionHeading from "./SectionHeading";

import TestimonialSlider from "./TestimonialSlider";
import Testi from "./Testi";

export default function Testimonial() {
  return (
    <div>
      <SectionHeading heading={"What Our"} subHeading={"Client Says"} />

      <TestimonialSlider testimonials={testimonials} />

      <div className="my-20">{/* <Testi /> */}</div>
    </div>
  );
}
