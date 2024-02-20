import Image from "next/image";
import Link from "next/link";

import PropertyTypes from "./PropertyTypes";
import PopularDeals from "./PopularDeals";
import AboutUs from "./AboutUs";
import Stats from "./Stats";
import Testimonial from "./Testimonial";
import FeaturedProperties from "./FeaturedProperties";
import CTA from "./CTA";
import Hero from "./Hero";

// async function getRooms() {
//   try {
//     const res = await fetch("http://localhost:3000/api/rooms", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       cache: "no-cache",
//     });

//     if (!res.ok) {
//       throw new Error("Could not fetch rooms");
//     }
//     return res.json();
//   } catch (err) {
//     throw new Error("Could not fetch rooms");
//   }
// }

export default function Test({ rooms }) {
  // const { data } = await getRooms();
  // console.log("rooms", data);
  return (
    <section className="">
      <Hero />

      <div className="flex flex-col bg-slate-100 pt-6">
        <PropertyTypes />

        <PopularDeals rooms={rooms} />

        <AboutUs />

        <Stats />

        <Testimonial />

        <FeaturedProperties rooms={rooms} />

        <CTA />
      </div>
    </section>
  );
}
