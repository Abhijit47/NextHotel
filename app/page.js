import AboutUs from "@/components/AboutUs";
import CTA from "@/components/CTA";
import FeaturedProperties from "@/components/FeaturedProperties";
import Hero from "@/components/Hero";
import PopularDeals from "@/components/PopularDeals";
import PropertyTypes from "@/components/PropertyTypes";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import { getRooms } from "@/lib/room.actions";

const isDev = process.env.NODE_ENV === "development" ? true : false;

const API_URL = isDev ? process.env.LOCAL_API_URL : process.env.SERVER_API_URL;

// async function getRooms() {
//   try {
//     const res = await fetch(`${API_URL}/api/rooms`, {
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
//     console.log({ err });
//     // throw new Error("Could not fetch rooms");
//   }
// }

export default async function Home() {
  const rooms = await getRooms();

  if (!rooms) {
    return <div>Could not fetch rooms</div>;
  }

  return (
    <main className="relative flex flex-col home gap-y-16">
      <Hero />
      {/* <hr className="p-px text-red-500 bg-red-500" /> */}
      <PropertyTypes />
      {/* <hr /> */}
      <PopularDeals rooms={rooms} />
      {/* <hr /> */}
      <AboutUs />
      {/* <hr /> */}
      <Stats />
      {/* <hr /> */}
      <Testimonial />
      {/* <hr /> */}
      <FeaturedProperties rooms={rooms} />
      {/* <hr /> */}
      <CTA />

      {/* <Link href={"#"} className="scroll-smooth">
        <NotoRocket className="absolute bottom-0 -rotate-45 right-5 size-16" />
      </Link> */}
    </main>
  );
}
