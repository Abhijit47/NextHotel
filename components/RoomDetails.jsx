import {
  HeroiconsOutlineBadgeCheck,
  HeroiconsOutlineHeart,
  HeroiconsSolidXCircle,
} from "@/assets/icons";
import { calcDateTime } from "@/lib/helpers";
import Image from "next/image";
import Link from "next/link";
import HostAvatar from "./HostAvatar";

export default function RoomDetails({ currentRoom }) {
  return (
    <aside className="hidden p-8 overflow-y-auto bg-white border-l border-gray-200 w-96 lg:block">
      <div className="pb-16 space-y-6">
        {/* Room photo */}
        <div>
          <div className="relative block w-full h-full overflow-hidden rounded-lg aspect-square">
            <Image
              src={currentRoom?.images?.picture_url}
              alt={currentRoom?.name}
              className="object-cover w-full h-full"
              width={500}
              height={500}
              priority={false}
            />
          </div>
          <div className="flex items-center justify-between mt-4 gap-x-2">
            <div>
              <h2 className="text-lg font-medium text-gray-900 line-clamp-1">
                <span className="sr-only">Details for </span>
                {currentRoom?.name}
              </h2>
              <p className="text-sm font-medium text-gray-500">
                {currentRoom?.property_type}
              </p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-8 h-8 text-gray-400 bg-white rounded-full hover:bg-rose-100 hover:text-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <HeroiconsOutlineHeart className="w-6 h-6" aria-hidden="true" />
              <span className="sr-only">Favorite</span>
            </button>
          </div>
        </div>

        {/* address */}
        <div>
          <h3 className="font-medium text-gray-900">Address</h3>
          <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
            <div className="flex justify-between py-3 text-sm font-medium gap-x-2">
              <dt className="text-gray-500">Street</dt>
              <dd className="text-gray-900 line-clamp-1">
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
              <dd className="flex items-center text-gray-900 gap-x-2">
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
            <div className="flex flex-col justify-between text-sm font-medium gap-y-2">
              <dt className="text-gray-500">Location</dt>

              <dd className="self-center w-full h-full aspect-square">
                <iframe
                  title="room-location"
                  className="object-cover w-full h-full"
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
          <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
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

          {/* <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
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
          <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">ID</dt>
              <dd className="text-gray-900">{currentRoom?.host?.host_id}</dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">Name</dt>
              <dd className="text-gray-900">{currentRoom?.host?.host_name}</dd>
            </div>
            <div className="flex justify-between py-3 text-sm font-medium gap-x-2">
              <dt className="text-gray-500">Location</dt>
              <dd className="text-gray-900 line-clamp-1">
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
                  <HeroiconsOutlineBadgeCheck className="w-5 h-5 text-green-500" />
                ) : (
                  <HeroiconsSolidXCircle className="w-5 h-5 text-red-500" />
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
          <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
            <div className="flex flex-col justify-between text-sm font-medium gap-y-2">
              <dt className="text-gray-500">
                <label
                  htmlFor="availability"
                  className="block text-sm font-medium text-gray-700 sr-only"
                >
                  Availability
                </label>
              </dt>
              <dd className="text-gray-900">
                <select
                  id="availability"
                  name="availability"
                  className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
          <div className="flex items-center justify-between mt-2">
            <p className="text-sm italic text-gray-500">
              Add a description to this image.
            </p>
            <button
              type="button"
              className="flex items-center justify-center w-8 h-8 text-gray-400 bg-white rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <HeroiconsSolidPencil className="w-5 h-5" aria-hidden="true" />
              <span className="sr-only">Add description</span>
            </button>
          </div>
        </div> */}

        {/*  */}
        {/* <div>
          <h3 className="font-medium text-gray-900">Shared with</h3>
          <ul className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
            {currentFile.sharedWith.map((person) => (
              <li
                key={person.id}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center">
                  <img
                    src={person.imageUrl}
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="ml-4 text-sm font-medium text-gray-900">
                    {person.name}
                  </p>
                </div>
                <button
                  type="button"
                  className="ml-6 text-sm font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Remove<span className="sr-only"> {person.name}</span>
                </button>
              </li>
            ))}
            <li className="flex items-center justify-between py-2">
              <button
                type="button"
                className="flex items-center p-1 -ml-1 bg-white rounded-md group focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span className="flex items-center justify-center w-8 h-8 text-gray-400 border-2 border-gray-300 border-dashed rounded-full">
                  <HeroiconsSolidPlusSm
                    className="w-5 h-5"
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
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Book now
          </button>
          <Link
            href="/"
            className="flex-1 px-4 py-2 ml-3 text-sm font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Back
          </Link>
        </div>
      </div>
    </aside>
  );
}
