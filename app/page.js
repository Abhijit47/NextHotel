import { NotoRocket } from "@/assets/icons";
import AboutUs from "@/components/AboutUs";
import CTA from "@/components/CTA";
import FeaturedProperties from "@/components/FeaturedProperties";
import Hero from "@/components/Hero";
import PopularDeals from "@/components/PopularDeals";
import PropertyTypes from "@/components/PropertyTypes";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import Link from "next/link";

const API_URL = process.env.API_URL;

async function getRooms() {
  try {
    const res = await fetch(`${API_URL}/api/rooms`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error("Could not fetch rooms");
    }
    return res.json();
  } catch (err) {
    throw new Error("Could not fetch rooms");
  }
}

export default async function Home() {
  const { data } = await getRooms();

  return (
    <main className="home relative flex flex-col gap-y-16">
      <Hero />
      {/* <hr className="bg-red-500 p-px text-red-500" /> */}
      <PropertyTypes />
      {/* <hr /> */}
      <PopularDeals rooms={data} />
      {/* <hr /> */}
      <AboutUs />
      {/* <hr /> */}
      <Stats />
      {/* <hr /> */}
      <Testimonial />
      {/* <hr /> */}
      <FeaturedProperties rooms={data} />
      {/* <hr /> */}
      <CTA />

      {/* <Link href={"#"} className="scroll-smooth">
        <NotoRocket className="absolute bottom-0 right-5 size-16 -rotate-45" />
      </Link> */}
    </main>
  );
}
