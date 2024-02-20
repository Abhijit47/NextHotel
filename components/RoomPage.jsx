"use client";

import { HeroiconsSolidViewGrid, HeroiconsSolidViewList } from "@/assets/icons";

import { useState } from "react";
import Paginatation from "@/components/Paginatation";
import RoomsGallery from "@/components/RoomsGallery";
import RoomTabs from "@/components/RoomTabs";
import RoomDetails from "@/components/RoomDetails";

export default function RoomPage({
  data,
  currentPage,
  currentResult,
  totalRecord,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleRoom(currIndex) {
    setCurrentIndex(currIndex);
  }

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      {/* Main content */}
      <div className="flex flex-1 items-stretch overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
            <div className="flex">
              <h1 className="flex-1 text-2xl font-bold text-gray-900">Rooms</h1>
              <div className="ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden">
                <button
                  type="button"
                  className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <HeroiconsSolidViewList
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Use list view</span>
                </button>
                <button
                  type="button"
                  className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <HeroiconsSolidViewGrid
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Use grid view</span>
                </button>
              </div>
            </div>

            {/* Tabs */}
            <RoomTabs />

            {/* Gallery */}
            <RoomsGallery
              data={data}
              currentIndex={currentIndex}
              onHandleIndex={handleRoom}
            />
          </div>
        </div>

        {/* Details sidebar */}
        {<RoomDetails currentRoom={data[currentIndex]} />}
      </div>
      <Paginatation
        currentPage={currentPage}
        currentResult={currentResult}
        totalRecord={totalRecord}
      />
    </div>
  );
}
