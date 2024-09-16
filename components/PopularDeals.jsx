import {
  GisLocationPoi,
  MdiBathroom,
  MdiBedroomOutline,
  MdiDot,
  MdiHeart,
} from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import Divider from "./Divider";
import SectionHeading from "./SectionHeading";

export default function PopularDeals({ rooms }) {
  if (rooms.length <= 0) {
    return (
      <div className={"text-center font-semibold"}>
        <p> There are no rooms available 😔</p>
      </div>
    );
  }

  return (
    <div className="grid gap-y-10">
      <SectionHeading heading={"Popular"} subHeading={"Property deals"} />

      <div className="grid gap-4 px-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
        {rooms?.map((room) => {
          // console.log("price", room?.price?.$numberDecimal);
          // console.log("sd", room?.security_deposit?.$numberDecimal);
          // console.log("cf", room?.cleaning_fee?.$numberDecimal);
          // console.log("ex", room?.extra_people?.$numberDecimal);
          return (
            <div key={room?._id} className="h-96">
              <div className="relative">
                <Image
                  src={room?.images?.picture_url}
                  width={400}
                  height={400}
                  priority
                  alt={room?.name}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute top-0 flex w-full translate-y-2 items-center justify-between px-2">
                  <div className="self-start">
                    <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm text-gray-800 shadow-md">
                      Scores:{" "}
                      {room.review_scores
                        ? Object.values(room?.review_scores).reduce(
                            (acc, curr) => acc + curr,
                            0,
                          )
                        : 0}
                    </span>
                  </div>
                  <div className="">
                    <span className="inline-flex items-center">
                      <MdiHeart className="h-8 w-8 cursor-pointer rounded-full bg-slate-600 bg-opacity-20 p-2 text-white transition-all delay-75 duration-500 ease-in-out hover:text-rose-500" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid gap-y-4 px-4 py-2">
                <h4 className="line-clamp-1 text-center text-lg font-medium">
                  {room?.name}
                </h4>
                <div className="flex items-center justify-between gap-x-2">
                  <GisLocationPoi className="h-5 w-5 text-slate-300" />
                  <h5 className="line-clamp-1 text-sm">
                    {room?.address?.street}
                  </h5>
                  <Image
                    src={`https://flagcdn.com/16x12/${room?.address?.country_code.toLowerCase()}.png`}
                    alt="country-flag"
                    width={16}
                    height={12}
                    priority
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                    <MdiBedroomOutline className="h-6 w-6 text-slate-300" />
                    <span>{room?.bedrooms} Bedroom</span>
                  </div>
                  <MdiDot className="h-5 w-5 text-slate-300" />
                  <div className="flex items-center gap-x-2">
                    <MdiBathroom className="h-5 w-5 text-slate-300" />
                    <span>{room?.bathrooms?.$numberDecimal} Bathroom</span>
                  </div>
                </div>

                <Divider />

                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-blue-800">
                    $
                    {Number(
                      room?.price?.$numberDecimal === undefined
                        ? "0"
                        : room?.price?.$numberDecimal,
                    ) +
                      Number(
                        room?.security_deposit?.$numberDecimal === undefined
                          ? "0"
                          : room?.security_deposit?.$numberDecimal,
                      ) +
                      Number(
                        room?.cleaning_fee?.$numberDecimal === undefined
                          ? "0"
                          : room?.cleaning_fee?.$numberDecimal,
                      ) +
                      Number(
                        room?.extra_people?.$numberDecimal === undefined
                          ? "0"
                          : room?.extra_people?.$numberDecimal,
                      )}
                    /&nbsp;
                    <span className="text-sm font-normal capitalize text-stone-800">
                      night
                    </span>
                  </h3>
                  <Link
                    href={`/rooms/${room._id}`}
                    className="rounded-md bg-slate-300 px-4 py-2 text-sm font-normal capitalize text-stone-700 shadow-md transition-all delay-75 duration-500 ease-in-out hover:shadow-none"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="justify-self-center">
        <Link
          className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
          href="/all-rooms"
        >
          <span className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all delay-75 duration-300 ease-in-out group-hover:w-full group-active:bg-indigo-500"></span>

          <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
            View More &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}
