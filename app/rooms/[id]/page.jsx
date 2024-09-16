import ReviewCard from "@/components/ReviewCard";
import { getRoom } from "@/lib/room.actions";
import Image from "next/image";
import Link from "next/link";

// const isDev = process.env.NODE_ENV === "development" ? true : false;

// const API_URL = isDev ? process.env.LOCAL_API_URL : process.env.SERVER_API_URL;

// async function getRoom(roomId) {
//   try {
//     const res = await fetch(`${API_URL}/api/rooms/${roomId}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       cache: "no-cache",
//     });

//     if (!res.ok) {
//       throw new Error(`Room ${roomId} not found`);
//     }

//     return res.json();
//   } catch (err) {
//     // console.log({ err });
//     throw new Error("Data fecthing is not successful.");
//   }
// }

export default async function RoomPage({ params }) {
  if (!params.id) {
    return (
      <div>
        <h1>Room not found</h1>
      </div>
    );
  }

  const room = await getRoom(params.id);

  if (!room) {
    return <h1>No Room Found!</h1>;
  }

  return (
    <section className={"space-y-12"}>
      <div>
        {/* Hero card */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 bg-gray-100 h-1/2" />
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <Image
                  className="object-cover w-full h-full"
                  src={room?.images?.picture_url}
                  alt={room?.name}
                  fill={true}
                  sizes={"(max-width: 768px) 100vw, 33vw"}
                  priority={true}
                />
                <div className="absolute inset-0 bg-amber-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl">
                  <span className="block text-white">{room?.name}</span>
                  <span className="block text-indigo-200">
                    customer support
                  </span>
                </h1>
                <p className="max-w-lg mx-auto mt-6 text-xl text-center text-indigo-200 sm:max-w-3xl">
                  {room?.space}
                </p>
                <div className="max-w-sm mx-auto mt-10 sm:flex sm:max-w-none sm:justify-center">
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <Link
                      href="#"
                      className="flex items-center justify-center px-4 py-3 text-base font-medium text-indigo-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50 sm:px-8"
                    >
                      Get started
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                    >
                      Live demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className="bg-gray-100">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <p className="text-sm font-semibold tracking-wide text-center text-gray-500 uppercase">
              Trusted by over 5 very average small businesses
            </p>
            <div className="grid grid-cols-2 gap-8 mt-6 md:grid-cols-6 lg:grid-cols-5">
              <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
                <Image
                  className="h-12"
                  src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                  alt="Tuple"
                  width={300}
                  height={200}
                />
              </div>
              <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
                <Image
                  className="h-12"
                  src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                  alt="Mirage"
                  width={300}
                  height={200}
                />
              </div>
              <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
                <Image
                  className="h-12"
                  src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                  alt="StaticKit"
                  width={300}
                  height={200}
                />
              </div>
              <div className="flex justify-center col-span-1 md:col-span-2 md:col-start-2 lg:col-span-1">
                <Image
                  className="h-12"
                  src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                  alt="Transistor"
                  width={300}
                  height={200}
                />
              </div>
              <div className="flex justify-center col-span-2 md:col-span-2 md:col-start-4 lg:col-span-1">
                <Image
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                  alt="Workcation"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <h3 className="font-semibold text-stone-800">Amenities</h3>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {room?.amenities?.map((amenitiy, idx) => (
            <span
              key={idx}
              className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800"
            >
              {amenitiy}
            </span>
          ))}
        </div>
      </div>

      {/* More main page content here... */}
      <h3 className="font-semibold text-stone-800">Reviews</h3>
      <ReviewCard reviews={room?.reviews} />

      <div className={"flex w-full items-center justify-center"}>
        <Link
          className="relative inline-block px-8 py-3 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring"
          href="/"
        >
          <span className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all delay-75 duration-300 ease-in-out group-hover:w-full group-active:bg-indigo-500"></span>

          <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
            Back to home &rarr;
          </span>
        </Link>
      </div>
    </section>
  );
}
