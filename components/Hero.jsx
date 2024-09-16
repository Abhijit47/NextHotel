import Image from "next/image";
import SearchProperty from "./SearchProperty";

import HeroBG from "@/public/hero-background.png";

export default function Hero() {
  return (
    <>
      <section className="relative mt-8 rounded-2xl bg-hero-background-img bg-cover bg-center bg-no-repeat">
        <Image
          src={HeroBG}
          alt="hero background image"
          fill={true}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          priority={true}
          placeholder={"blur"}
          blurDataURL={HeroBG.blurDataURL}
          className={
            "-z-10 h-full w-full overflow-hidden rounded-lg p-4 lg:p-8"
          }
        />

        <div className="grid grid-cols-1 justify-items-stretch xs:p-4 md:p-8 lg:p-16">
          {/* column 1 */}
          <div className="grid justify-items-start gap-y-8">
            <button
              type="button"
              className="whitespace-nowrap rounded-full border border-solid border-white border-opacity-30 bg-white bg-opacity-20 px-5 py-2 text-center text-slate-900 max-md:px-5 lg:px-6 lg:py-2.5"
            >
              A Vision for Your Life
            </button>
            <h1 className="text-7xl font-bold leading-[80px] text-blue-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              <span className="text-slate-800">Find Your Best</span>
              <br />
              <span className="text-blue-800">Real Estate</span>
            </h1>
            <p className="text-base text-slate-800 max-md:max-w-full">
              Nemo enim ipsam voluptatem quia voluptas sit aspernat
              <br />
              odit aut fugit, sed quia consequuntur magni dolores
              <br />
              qui ratione sequi nesciunt.
            </p>
            <SearchProperty />
          </div>
        </div>
      </section>
      {/* <section className="mt-8 bg-center bg-no-repeat bg-cover rounded-2xl bg-hero-background-img">
        <div className="grid grid-cols-1 justify-items-stretch xs:p-4 md:p-8 lg:p-16">
          <div className="grid justify-items-start gap-y-8">
            <button
              type="button"
              className="whitespace-nowrap rounded-full border border-solid border-white border-opacity-30 bg-white bg-opacity-20 px-5 py-2 text-center text-slate-900 max-md:px-5 lg:px-6 lg:py-2.5"
            >
              A Vision for Your Life
            </button>
            <h1 className="text-7xl font-bold leading-[80px] text-blue-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              <span className="text-slate-800">Find Your Best</span>
              <br />
              <span className="text-blue-800">Real Estate</span>
            </h1>
            <p className="text-base text-slate-800 max-md:max-w-full">
              Nemo enim ipsam voluptatem quia voluptas sit aspernat
              <br />
              odit aut fugit, sed quia consequuntur magni dolores
              <br />
              qui ratione sequi nesciunt.
            </p>
            <SearchProperty />
          </div>
        </div>
      </section> */}
    </>
  );
}
