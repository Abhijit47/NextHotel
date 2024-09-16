"use server";

import Room from "@/models/Room";
import { connectDB } from "./connectDB";

export async function getRooms() {
  await connectDB();

  const rooms = await Room.find({}).lean().limit(8);

  if (!rooms) {
    return [];
  }

  return JSON.parse(JSON.stringify(rooms));
}

export async function getRoom(id) {
  await connectDB();

  const room = await Room.findById({ _id: id }).lean();

  if (!room) {
    return {};
  }

  return JSON.parse(JSON.stringify(room));
}

export async function getAllRoomsd(page) {
  await connectDB();

  const docsPerPage = 28; // 5 docs in single page
  const currentPageNumber = Number(page); // 1st page

  const rooms = await Room.find({})
    .lean()
    .skip(docsPerPage * currentPageNumber)
    .limit(docsPerPage);

  const totalRooms = await Room.find({}).countDocuments();
  const noOfPages = totalRooms / docsPerPage;

  if (!rooms) {
    return [];
  }

  return JSON.parse(
    JSON.stringify({
      rooms,
      currentPageNumber,
      totalRooms,
      noOfPages: Math.ceil(noOfPages - currentPageNumber),
    }),
  );
}
