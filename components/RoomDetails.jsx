import Link from "next/link";
import Image from "next/image";
import {
  HeroiconsOutlineBadgeCheck,
  HeroiconsOutlineHeart,
  HeroiconsOutlineX,
  HeroiconsSolidPencil,
  HeroiconsSolidPlusSm,
  HeroiconsSolidXCircle,
} from "@/assets/icons";
import HostAvatar from "./HostAvatar";
import { calcDateTime } from "@/lib/helpers";
import { currentFile } from "@/constants";

export default function RoomDetails({ currentRoom }) {
  return (
    <aside className="hidden w-96 overflow-y-auto border-l border-gray-200 bg-white p-8 lg:block">
      <div className="space-y-6 pb-16">
        {/* Room photo */}
        <div>
          <div className="aspect-h-7 aspect-w-10 relative block w-full overflow-hidden rounded-lg">
            <Image
              src={currentRoom?.images?.picture_url}
              alt={currentRoom?.name}
              className="object-cover"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="mt-4 flex items-center justify-between gap-x-2">
            <div>
              <h2 className="line-clamp-1 text-lg font-medium text-gray-900">
                <span className="sr-only">Details for </span>
                {currentRoom?.name}
              </h2>
              <p className="text-sm font-medium text-gray-500">
                {currentRoom?.property_type}
              </p>
            </div>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-rose-100 hover:text-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <HeroiconsOutlineHeart className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Favorite</span>
            </button>
          </div>
        </div>

        {/* address */}
        <div>
          <h3 className="font-medium text-gray-900">Address</h3>
          <dl className="mt-2 divide-y divide-gray-200 border-b border-t border-gray-200">
            <div className="flex justify-between gap-x-2 py-3 text-sm font-medium">
              <dt className="text-gray-500">Street</dt>
              <dd className="line-clamp-1 text-gray-900">
                {currentRoom?.address?.street}
              </dd>
            </div>

            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Market</dt>
              <dd className="text-gray-900">{currentRoom?.address?.market}</dd>
            </div>

            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Country</dt>
              <dd className="text-gray-900">{currentRoom?.address?.country}</dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Code</dt>
              <dd className="flex items-center gap-x-2 text-gray-900">
                {currentRoom?.address?.country_code}
                <Image
                  src={`https://flagcdn.com/16x12/${currentRoom?.address?.country_code.toLowerCase()}.png`}
                  width={16}
                  height={12}
                  priority={false}
                  alt="country-code"
                />
              </dd>
            </div>
            <div className="flex flex-col justify-between gap-y-2 text-sm font-medium">
              <dt className="text-gray-500">Location</dt>

              <dd className="aspect-h-5 aspect-w-7 mx-auto w-full self-center">
                <iframe
                  title="room-location"
                  className="object-cover"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  width={300}
                  height={200}
                  loading="lazy"
                  src={`https://maps.google.com/maps?width=300&height=300&hl=en&q=${currentRoom?.address?.street}&lat=${currentRoom?.address?.location?.coordinates[0]}&lng=${currentRoom?.address?.location?.coordinates[1]}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                ></iframe>
                <Link href="https://www.gps.ie/" className="sr-only">
                  gps tracker sport
                </Link>
              </dd>
            </div>
          </dl>
        </div>

        {/* Room information */}
        <div>
          <h3 className="font-medium text-gray-900">Room Information</h3>
          <dl className="mt-2 divide-y divide-gray-200 border-b border-t border-gray-200">
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Room Type</dt>
              <dd className="text-gray-900">{currentRoom?.room_type}</dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Bed Type</dt>
              <dd className="text-gray-900">{currentRoom?.bed_type}</dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Min. Nights</dt>
              <dd className="text-gray-900">
                {currentRoom?.minimum_nights} days
              </dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Max. Nights</dt>
              <dd className="text-gray-900">
                {currentRoom?.maximum_nights} days
              </dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Accommodates</dt>
              <dd className="text-gray-900">{currentRoom?.accommodates}</dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Bedrooms</dt>
              <dd className="text-gray-900">{currentRoom?.bedrooms}</dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Beds</dt>
              <dd className="text-gray-900">{currentRoom?.beds}</dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">First review</dt>
              <dd className="text-gray-900">
                {calcDateTime(currentRoom?.first_review)}
              </dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Last review</dt>
              <dd className="text-gray-900">
                {calcDateTime(currentRoom?.last_review)}
              </dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Price</dt>
              <dd className="text-gray-900">
                $ {currentRoom?.price?.$numberDecimal}
              </dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Security Amount</dt>
              <dd className="text-gray-900">
                ${" "}
                {currentRoom?.security_deposit?.$numberDecimal === undefined
                  ? 0
                  : currentRoom?.security_deposit?.$numberDecimal}
              </dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Cleaning fee</dt>
              <dd className="text-gray-900">
                ${" "}
                {currentRoom?.cleaning_fee?.$numberDecimal === undefined
                  ? 0
                  : currentRoom?.cleaning_fee?.$numberDecimal}
              </dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Extra fee</dt>
              <dd className="text-gray-900">
                ${" "}
                {currentRoom?.extra_people?.$numberDecimal === undefined
                  ? 0
                  : currentRoom?.extra_people?.$numberDecimal}
              </dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Guest(included)</dt>
              <dd className="text-gray-900">
                {currentRoom?.guests_included?.$numberDecimal === undefined
                  ? 0
                  : currentRoom?.guests_included?.$numberDecimal}
              </dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Review(in total)</dt>
              <dd className="text-gray-900">
                {currentRoom?.number_of_reviews}
              </dd>
            </div>
          </dl>

          {/* <dl className="mt-2 divide-y divide-gray-200 border-b border-t border-gray-200">
            {Object.keys(currentFile.information).map((key) => (
              <div
                key={key}
                className="flex justify-between py-3 text-sm font-medium"
              >
                <dt className="text-gray-500">{key}</dt>
                <dd className="text-gray-900">
                  {currentFile.information[key]}
                </dd>
              </div>
            ))}
          </dl> */}
        </div>

        {/* Host information */}
        <div>
          <h3 className="font-medium text-gray-900">Host Information</h3>
          <dl className="mt-2 divide-y divide-gray-200 border-b border-t border-gray-200">
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">ID</dt>
              <dd className="text-gray-900">{currentRoom?.host?.host_id}</dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Name</dt>
              <dd className="text-gray-900">{currentRoom?.host?.host_name}</dd>
            </div>
            <div className="flex justify-between gap-x-2 py-3 text-sm font-medium">
              <dt className="text-gray-500">Location</dt>
              <dd className="line-clamp-1 text-gray-900">
                {currentRoom?.host?.host_location}
              </dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Response time</dt>
              <dd className="text-gray-900">
                {currentRoom?.host?.host_response_time === undefined
                  ? "Unknown"
                  : currentRoom?.host?.host_response_time}
              </dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Response rate</dt>
              <dd className="text-gray-900">
                {currentRoom?.host?.host_response_rate === undefined
                  ? "Unknown"
                  : currentRoom?.host?.host_response_rate}
              </dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Verified</dt>
              <dd className="text-gray-900">
                {currentRoom?.host?.host_identity_verified ? (
                  <HeroiconsOutlineBadgeCheck className="h-5 w-5 text-green-500" />
                ) : (
                  <HeroiconsSolidXCircle className="h-5 w-5 text-red-500" />
                )}
              </dd>
            </div>

            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Listing</dt>
              <dd className="text-gray-900">
                {currentRoom?.host?.host_listings_count}
              </dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Neighbour</dt>
              <dd className="text-gray-900">
                {currentRoom.host.host_neighbourhood === ""
                  ? "None"
                  : currentRoom.host.host_neighbourhood}
              </dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Host</dt>
              <dd className="text-gray-900">
                <HostAvatar imageUrl={currentRoom?.host?.host_picture_url} />
              </dd>
            </div>
          </dl>
        </div>

        {/*  */}
        <div>
          <h3 className="font-medium text-gray-900">Availability</h3>
          <dl className="mt-2 divide-y divide-gray-200 border-b border-t border-gray-200">
            <div className="flex flex-col justify-between gap-y-2 text-sm font-medium">
              <dt className="text-gray-500">
                <label
                  htmlFor="availability"
                  className="sr-only block text-sm font-medium text-gray-700"
                >
                  Availability
                </label>
              </dt>
              <dd className="text-gray-900">
                <select
                  id="availability"
                  name="availability"
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  defaultValue="0"
                >
                  {Object.entries(currentRoom?.availability)?.map(
                    ([key, value], idx) => (
                      <option key={idx}>Available for {value} days</option>
                    ),
                  )}
                </select>
              </dd>
            </div>
          </dl>
        </div>

        {/* Description */}
        {/* <div>
          <h3 className="font-medium text-gray-900">Description</h3>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm italic text-gray-500">
              Add a description to this image.
            </p>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <HeroiconsSolidPencil className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Add description</span>
            </button>
          </div>
        </div> */}

        {/*  */}
        {/* <div>
          <h3 className="font-medium text-gray-900">Shared with</h3>
          <ul className="mt-2 divide-y divide-gray-200 border-b border-t border-gray-200">
            {currentFile.sharedWith.map((person) => (
              <li
                key={person.id}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center">
                  <img
                    src={person.imageUrl}
                    alt=""
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="ml-4 text-sm font-medium text-gray-900">
                    {person.name}
                  </p>
                </div>
                <button
                  type="button"
                  className="ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Remove<span className="sr-only"> {person.name}</span>
                </button>
              </li>
            ))}
            <li className="flex items-center justify-between py-2">
              <button
                type="button"
                className="group -ml-1 flex items-center rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                  <HeroiconsSolidPlusSm
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </span>
                <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                  Share
                </span>
              </button>
            </li>
          </ul>
        </div> */}
        <div className="flex">
          <button
            type="button"
            className="flex-1 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Book now
          </button>
          <Link
            href="/"
            className="ml-3 flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Back
          </Link>
        </div>
      </div>
    </aside>
  );
}
