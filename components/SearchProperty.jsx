"use client";

import {
  HeroiconsMagnifyingGlass16Solid,
  GisLocationPoi,
} from "@/assets/icons";

import { classNames } from "@/lib/helpers";
import { useState } from "react";

import { location, price, property, tabItems } from "@/constants";
import PropertyDropdown from "./PropertyDropdown";

export default function SearchProperty() {
  const [selectTab, setSelectTab] = useState(0);

  function handleTab(idx) {
    setSelectTab(idx);
  }

  return (
    <div className="w-full">
      <div className="relative ml-3.5 flex flex-wrap gap-2 whitespace-nowrap max-md:ml-2.5 max-md:mt-10">
        {tabItems.map((tabButton, idx) => (
          <button
            type="button"
            key={tabButton.id}
            onClick={() => handleTab(idx)}
            className={classNames(
              idx === selectTab
                ? "bg-blue-800 text-white"
                : "bg-white text-blue-800",
              "rounded px-6 py-2 transition-all delay-75 duration-300 ease-in-out",
            )}
          >
            {tabButton.title}
          </button>
        ))}
      </div>

      <div className="rounded-md border border-solid border-white border-opacity-30 bg-white bg-opacity-20 p-4 backdrop-blur-sm max-md:flex-wrap sm:w-[455px] md:w-[655px]">
        <div className="flex justify-between gap-x-2 gap-y-4 max-md:max-w-full max-md:flex-wrap md:gap-y-0">
          <div className="flex w-full items-center">
            <GisLocationPoi className="h-3 w-3 text-blue-500" />
            <PropertyDropdown data={location} buttonName={"location"} />
          </div>

          <PropertyDropdown data={property} buttonName={"property"} />

          <PropertyDropdown data={price} buttonName={"price"} />

          <button className="flex items-center justify-between gap-1 rounded bg-blue-800 px-8 py-2 text-sm text-white shadow-sm">
            <span>
              <HeroiconsMagnifyingGlass16Solid className="h-4 w-4" />
            </span>
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
