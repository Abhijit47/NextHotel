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

const isDev = process.env.NODE_ENV === "development" ? true : false;

const API_URL = isDev ? process.env.LOCAL_API_URL : process.env.SERVER_API_URL;

export default function PopularDeals({ rooms }) {
  return (
    <div className="grid gap-y-10">
      <SectionHeading heading={"Popular"} subHeading={"Property deals"} />

      <div className="grid gap-4 px-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
        {rooms?.data?.map((room) => {
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
                  className="object-cover w-full h-48"
                />
                <div className="absolute top-0 flex items-center justify-between w-full px-2 translate-y-2">
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
                      <MdiHeart className="w-8 h-8 p-2 text-white transition-all duration-500 ease-in-out delay-75 rounded-full cursor-pointer bg-slate-600 bg-opacity-20 hover:text-rose-500" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid px-4 py-2 gap-y-4">
                <h4 className="text-lg font-medium text-center line-clamp-1">
                  {room?.name}
                </h4>
                <div className="flex items-center justify-between gap-x-2">
                  <GisLocationPoi className="w-5 h-5 text-slate-300" />
                  <h5 className="text-sm line-clamp-1">
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
                    <MdiBedroomOutline className="w-6 h-6 text-slate-300" />
                    <span>{room?.bedrooms} Bedroom</span>
                  </div>
                  <MdiDot className="w-5 h-5 text-slate-300" />
                  <div className="flex items-center gap-x-2">
                    <MdiBathroom className="w-5 h-5 text-slate-300" />
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
                    className="px-4 py-2 text-sm font-normal capitalize transition-all duration-500 ease-in-out delay-75 rounded-md shadow-md bg-slate-300 text-stone-700 hover:shadow-none"
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
          className="relative inline-block px-8 py-3 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring"
          // href="/all-rooms"
          href={isDev ? "/all-rooms" : "#!"}
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
