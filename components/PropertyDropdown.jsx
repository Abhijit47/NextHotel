"use client";

import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

import {
  MdiDollar,
  HeroiconsOutlineBadgeCheck,
  HeroiconsChevronDownSolid,
  MdiHouse,
} from "@/assets/icons";
import { classNames } from "@/lib/helpers";

export default function PropertyDropdown({ data, buttonName }) {
  const [selected, setSelected] = useState(data[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative w-full">
        <Listbox.Button
          as="div"
          className={classNames(
            buttonName === "location"
              ? "bg-transparent shadow-none"
              : "bg-white shadow-md",
            "relative w-full cursor-default rounded-md py-4 pl-3 pr-10 text-left focus:outline-none focus-visible:border-[#1252AE] focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1252AE] sm:text-sm md:w-36",
          )}
        >
          <div className="flex items-center gap-x-1">
            {buttonName === "property" && (
              <span>
                <MdiHouse className="h-3 w-3 text-[#1252AE]" />
              </span>
            )}
            {buttonName === "price" && (
              <span>
                <MdiDollar className="h-3 w-3 font-bold text-[#1252AE]" />
              </span>
            )}
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HeroiconsChevronDownSolid
                className="h-4 w-4 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </div>
        </Listbox.Button>
        <Transition
          as={Fragment}
          // leave="transition ease-in duration-100"
          // leaveFrom="opacity-100"
          // leaveTo="opacity-0"
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {data.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active, selected }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-blue-100 text-[#1252AE]" : "text-gray-900"
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {person.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#1252AE]">
                        <HeroiconsOutlineBadgeCheck
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
