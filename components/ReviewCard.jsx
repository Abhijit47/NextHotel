import { classNames, customDate } from "@/lib/helpers";
import Link from "next/link";

const {
  HeroiconsOutlineAcademicCap,
  HeroiconsOutlineBadgeCheck,
  HeroiconsOutlineCash,
  HeroiconsOutlineClock,
  HeroiconsOutlineReceiptRefund,
  HeroiconsOutlineUsers,
  HeroiconsOutlineChatAlt,
} = require("@/assets/icons");

const actions = [
  {
    title: "Request time off",
    href: "#",
    icon: HeroiconsOutlineClock,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Benefits",
    href: "#",
    icon: HeroiconsOutlineBadgeCheck,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Schedule a one-on-one",
    href: "#",
    icon: HeroiconsOutlineUsers,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Payroll",
    href: "#",
    icon: HeroiconsOutlineCash,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    title: "Submit an expense",
    href: "#",
    icon: HeroiconsOutlineReceiptRefund,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    title: "Training",
    href: "#",
    icon: HeroiconsOutlineAcademicCap,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
];

export default function ReviewCard({ reviews }) {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      {reviews?.map((review, reviewIdx) => (
        <div
          key={review._id}
          className={classNames(
            reviewIdx === 0
              ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
              : "",
            reviewIdx === 1 ? "sm:rounded-tr-lg" : "",
            reviewIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
            reviewIdx === actions.length - 1
              ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
              : "",
            "group relative grid gap-y-4 bg-white p-6 shadow-sm focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500",
          )}
        >
          <div>
            <span
              className={
                "inline-flex rounded-lg bg-indigo-50 p-3 text-teal-700 ring-4 ring-white"
              }
            >
              <HeroiconsOutlineChatAlt className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="">
            <h3 className="text-lg font-medium">
              <Link
                href={`/rooms/${review?.listing_id}`}
                className="focus:outline-none"
              >
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {review?.reviewer_name}
              </Link>
            </h3>
            <p className="mt-2 line-clamp-3 text-sm text-gray-500">
              {review?.comments}
            </p>
          </div>
          <div className="justify-self-end">
            <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800">
              {customDate(review?.date)}
            </span>
          </div>
          <span
            className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}
