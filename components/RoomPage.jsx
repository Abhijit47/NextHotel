"use client";

import { HeroiconsSolidViewGrid, HeroiconsSolidViewList } from "@/assets/icons";

import RoomsGallery from "@/components/RoomsGallery";
import RoomTabs from "@/components/RoomTabs";
import { useState } from "react";
import Paginatation from "./Paginatation";
import RoomDetails from "./RoomDetails";

export default function RoomPage({
  rooms,
  currentPage,
  currentResult,
  totalRecord,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleRoom(currIndex) {
    setCurrentIndex(currIndex);
  }

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Main content */}
      <div className="flex items-stretch flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-scroll h-dvh">
          <div className="px-4 pt-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex">
              <h1 className="flex-1 text-2xl font-bold text-gray-900">Rooms</h1>
              <div className="ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden">
                <button
                  type="button"
                  className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <HeroiconsSolidViewList
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Use list view</span>
                </button>
                <button
                  type="button"
                  className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <HeroiconsSolidViewGrid
                    className="w-5 h-5"
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
              rooms={rooms}
              currentIndex={currentIndex}
              onHandleIndex={handleRoom}
            />
          </div>
        </div>

        {/* Details sidebar */}
        {<RoomDetails currentRoom={rooms[currentIndex]} />}
      </div>
      <Paginatation
        currentPage={currentPage}
        currentResult={currentResult}
        totalRecord={totalRecord}
      />
    </div>
  );
}
