import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

async function getRooms() {
  const res = await fetch("http://localhost:3000/api/rooms", {
    cache: "default",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export default async function RoomsPage() {
  const { data } = await getRooms();

  return (
    <section>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {data?.map((room, idx) => (
          <li key={idx} className="relative">
            <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <Image
                src={room?.images?.picture_url}
                alt="rooms-image"
                className="pointer-events-none object-cover group-hover:opacity-75"
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
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
              {room?.name}
            </p>
            <p className="pointer-events-none block text-sm font-medium text-gray-500">
              {room?.size}
            </p>
          </li>
        ))}
      </ul>

      <div className="grid gap-y-6">
        {data.map((room) => (
          <article
            key={room._id}
            className="flex bg-white transition hover:shadow-xl"
          >
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
              <time
                dateTime="2022-10-10"
                className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
              >
                <span>2022</span>
                <span className="w-px flex-1 bg-gray-900/10"></span>
                <span>Oct 10</span>
              </time>
            </div>

            <div className="aspect-w-1 relative hidden sm:block sm:basis-56">
              <Image
                alt={`${room.name}-photo`}
                src={room?.images?.picture_url}
                width={500}
                height={500}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <Link href={`/rooms/${room._id}`}>
                  <h3 className="font-bold uppercase text-gray-900">
                    {room?.name}
                  </h3>
                </Link>

                <p className="mt-2 line-clamp-2 text-sm/relaxed text-gray-700">
                  {room?.description}
                </p>
              </div>

              <div className="sm:flex sm:items-end sm:justify-end">
                <Link
                  href={`/rooms/${room._id}`}
                  className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
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
