"useClient";

import { classNames } from "@/lib/helpers";
import RoomCover from "./RoomCover";

export default function RoomsGallery({ rooms, currentIndex, onHandleIndex }) {
  return (
    <div className="pb-16 mt-8" aria-labelledby="gallery-heading">
      <h2 id="gallery-heading" className="sr-only">
        Recently viewed
      </h2>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {rooms?.map((room, idx) => (
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
                "group relative block aspect-square h-full w-full overflow-hidden rounded-lg bg-gray-100",
              )}
            >
              <RoomCover
                roomCover={room?.images?.picture_url}
                className={classNames(
                  idx !== currentIndex ? "" : "group-hover:opacity-75",
                  "pointer-events-none h-full w-full object-cover",
                )}
              />
              {/* <Image
                src={room?.images?.picture_url}
                alt={room?.name}
                className={classNames(
                  idx !== currentIndex ? "" : "group-hover:opacity-75",
                  "pointer-events-none h-full w-full object-cover",
                )}
                width={500}
                height={500}
                priority={false}
              /> */}
              <button
                type="button"
                id="target"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {room?.name}</span>
              </button>
            </div>
            <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none">
              {room?.name}
            </p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              {room?.property_type}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
