"useClient";

import { classNames } from "@/lib/helpers";
import Image from "next/image";

export default function RoomsGallery({ data, currentIndex, onHandleIndex }) {
  return (
    <div className="mt-8 pb-16" aria-labelledby="gallery-heading">
      <h2 id="gallery-heading" className="sr-only">
        Recently viewed
      </h2>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data.map((room, idx) => (
          <li
            key={room._id}
            className="relative"
            onClick={() => onHandleIndex(idx)}
          >
            <div
              className={classNames(
                idx === currentIndex
                  ? "ring-2 ring-indigo-500 ring-offset-2"
                  : "focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100",
                "group aspect-h-7 aspect-w-10 relative block w-full overflow-hidden rounded-lg bg-gray-100",
              )}
            >
              <Image
                src={room?.images?.picture_url}
                alt={room?.name}
                className={classNames(
                  idx !== currentIndex ? "" : "group-hover:opacity-75",
                  "pointer-events-none object-cover",
                )}
                width={500}
                height={500}
                priority={false}
              />
              <button
                type="button"
                id="target"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {room?.name}</span>
              </button>
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
              {room?.name}
            </p>
            <p className="pointer-events-none block text-sm font-medium text-gray-500">
              {room?.property_type}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
