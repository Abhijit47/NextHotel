import Image from "next/image";
import Link from "next/link";

import CircleEffect from "@/assets/icons/CircleEffect";
import Accordion from "./Accordion";
import { MdiArrowRightThin } from "@/assets/icons";
import SectionHeading from "./SectionHeading";
import { faqs } from "@/constants";

export default function AboutUs() {
  return (
    <div className="h-full">
      <SectionHeading heading={"About"} subHeading={"Us"} />

      {/* section 1 */}
      <div className="grid h-full grid-cols-1 gap-x-4 lg:grid-cols-2 lg:gap-x-14">
        <div className="relative h-screen p-4 lg:p-16">
          <Image
            src={"/about-img-1.png"}
            alt="about-image 1"
            width={536}
            height={585}
            priority
            className="absolute z-20 w-5/12 translate-x-4 translate-y-20 lg:w-9/12"
          />
          <div className="absolute right-4 top-0 z-10 h-4/6 w-9/12 -translate-x-6 translate-y-28 rounded-lg ring-1 ring-slate-500"></div>
          <CircleEffect className="absolute bottom-0 left-0 z-10 size-44 bg-slate-200" />
        </div>

        <div className="grid gap-y-4 p-4 lg:p-8 xl:p-16">
          <div className="grid justify-items-start gap-y-4">
            <h3 className="text-4xl font-semibold text-stone-800">
              We Are The Best And Trusted{" "}
              <span className="text-blue-800">Real Estate</span> Agent
            </h3>

            <p className="text-sm text-stone-700">
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat.
            </p>

            <p className="text-sm text-stone-700">
              Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
          </div>

          <Accordion data={faqs} />
        </div>
      </div>

      {/* section 2 */}
      <div className="grid h-screen grid-cols-1 gap-x-4 lg:grid-cols-2 lg:gap-x-14">
        <div className="grid gap-y-4 p-16">
          <div className="grid items-center justify-items-start gap-y-4">
            <h3 className="text-4xl font-semibold text-stone-800">
              We Are Offernig The Best{" "}
              <span className="text-blue-800">Real Estate</span> Deals
            </h3>

            <p className="text-sm text-stone-700">
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat.
            </p>
            <p className="text-sm text-stone-700">
              Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
          </div>

          <div>
            <dl className="flex items-center gap-x-2">
              <dt>
                <MdiArrowRightThin className="h-5 w-5 text-blue-800" />
              </dt>
              <dd className="text-sm font-normal">
                A building with only one room and typically a steep pointy roof.
              </dd>
            </dl>

            <dl className="flex items-center gap-x-2">
              <dt>
                <MdiArrowRightThin className="h-5 w-5 text-blue-800" />
              </dt>
              <dd className="text-sm font-normal">
                A vehicle on wheels that has a permanent residence attached to
                it.
              </dd>
            </dl>

            <dl className="flex items-center gap-x-2">
              <dt>
                <MdiArrowRightThin className="h-5 w-5 text-blue-800" />
              </dt>
              <dd className="text-sm font-normal">
                Performing financial analysis and valuation of properties.
              </dd>
            </dl>

            <dl className="flex items-center gap-x-2">
              <dt>
                <MdiArrowRightThin className="h-5 w-5 text-blue-800" />
              </dt>
              <dd className="text-sm font-normal">
                Someone who examines buildings and works with appraisers.
              </dd>
            </dl>

            <dl className="flex items-center gap-x-2">
              <dt>
                <MdiArrowRightThin className="h-5 w-5 text-blue-800" />
              </dt>
              <dd className="text-sm font-normal">
                A dwelling typically made of raw materials such as bamboo, mud,
                and clay.
              </dd>
            </dl>
          </div>

          <Link
            href={"#"}
            className="self-center justify-self-start rounded-md bg-blue-800 px-4 py-2 text-slate-50 shadow-md transition-all delay-75 duration-500 ease-in-out hover:shadow-none"
          >
            View more
          </Link>
        </div>

        <div className="relative p-16">
          <Image
            src={"/about-img-2.png"}
            alt="about-image 1"
            width={536}
            height={585}
            priority
            className="absolute z-20 w-9/12 translate-x-4 translate-y-20"
          />
          <div className="absolute right-4 top-0 z-10 h-4/6 w-9/12 -translate-x-6 translate-y-28 rounded-lg ring-1 ring-slate-500"></div>
          <CircleEffect className="absolute bottom-0 left-0 z-10 size-44 bg-slate-200" />
        </div>
      </div>
    </div>
  );
}
