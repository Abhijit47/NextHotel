import Link from "next/link";
import { HeroiconsSolidViewGrid, HeroiconsSolidViewList } from "@/assets/icons";
import { classNames } from "@/lib/helpers";

const tabs = [
  { name: "Recently Viewed", href: "#", current: true },
  { name: "Recently Added", href: "#", current: false },
  { name: "Favorited", href: "#", current: false },
];

export default function RoomTabs() {
  return (
    <div className="mt-3 sm:mt-2">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue="Recently Viewed"
        >
          <option>Recently Viewed</option>
          <option>Recently Added</option>
          <option>Favorited</option>
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="flex items-center border-b border-gray-200">
          <nav
            className="-mb-px flex flex-1 space-x-6 xl:space-x-8"
            aria-label="Tabs"
          >
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? "page" : undefined}
                className={classNames(
                  tab.current
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium",
                )}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
          <div className="ml-6 hidden items-center rounded-lg bg-gray-100 p-0.5 sm:flex">
            <button
              type="button"
              className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <HeroiconsSolidViewList className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Use list view</span>
            </button>
            <button
              type="button"
              className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <HeroiconsSolidViewGrid className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Use grid view</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
