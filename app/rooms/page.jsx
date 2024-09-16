import { getRooms } from "@/lib/room.actions";
import Image from "next/image";
import Link from "next/link";

// const isDev = process.env.NODE_ENV === "development" ? true : false;

// const API_URL = isDev ? process.env.LOCAL_API_URL : process.env.SERVER_API_URL;

// async function getRooms() {
//   const res = await fetch(`${API_URL}/api/rooms`, {
//     cache: "default",
//   });

//   if (!res.ok) {
//     return notFound();
//   }

//   return res.json();
// }

// export const revalidate = 60 * 60;

export default async function RoomsPage() {
  const rooms = await getRooms();

  if (rooms.length <= 0) {
    return (
      <div>
        <h1>No rooms available</h1>
      </div>
    );
  }

  return (
    <section className={"space-y-12 py-12"}>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {rooms?.map((room, idx) => (
          <li key={idx} className="relative">
            <div className="block w-full overflow-hidden bg-gray-100 rounded-lg aspect-h-7 aspect-w-10 group focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <Image
                src={room?.images?.picture_url}
                alt="rooms-image"
                className="object-cover pointer-events-none group-hover:opacity-75"
                width={500}
                height={500}
                priority
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {room?.name}</span>
              </button>
            </div>
            <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none">
              {room?.name}
            </p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              {room?.size}
            </p>
          </li>
        ))}
      </ul>

      <div className="grid gap-y-6">
        {rooms.map((room) => (
          <article
            key={room._id}
            className="flex transition bg-white hover:shadow-xl"
          >
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
              <time
                dateTime="2022-10-10"
                className="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase"
              >
                <span>2022</span>
                <span className="flex-1 w-px bg-gray-900/10"></span>
                <span>Oct 10</span>
              </time>
            </div>

            <div className="relative hidden aspect-w-1 sm:block sm:basis-56">
              <Image
                alt={`${room.name}-photo`}
                src={room?.images?.picture_url}
                width={500}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div className="p-4 border-s border-gray-900/10 sm:border-l-transparent sm:p-6">
                <Link href={`/rooms/${room._id}`}>
                  <h3 className="font-bold text-gray-900 uppercase">
                    {room?.name}
                  </h3>
                </Link>

                <p className="mt-2 text-gray-700 line-clamp-2 text-sm/relaxed">
                  {room?.description}
                </p>
              </div>

              <div className="sm:flex sm:items-end sm:justify-end">
                <Link
                  href={`/rooms/${room._id}`}
                  className="block px-5 py-3 text-xs font-bold text-center text-gray-900 uppercase transition bg-yellow-300 hover:bg-yellow-400"
                >
                  know more
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
