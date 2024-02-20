import connectDB from "@/lib/connectDB";
import { sendResponse } from "@/lib/helpers";
import Room from "@/models/Room";

// export const dynamic = "force-dynamic";

export async function GET(request, response) {
  try {
    await connectDB();

    const pageParams = new URL(request.url).searchParams.get("page");
    const no_of_docs_each_page = 28; // 5 docs in single page
    const current_page_number = Number(pageParams) ?? 1; // 1st page

    const rooms = await Room.find({})
      .lean()
      .skip(no_of_docs_each_page * current_page_number)
      .limit(no_of_docs_each_page);

    const currentRoomsCount = await Room.find({})
      .lean()
      .skip(no_of_docs_each_page * current_page_number)
      .limit(no_of_docs_each_page)
      .count();

    const totalRooms = await Room.find({}).count();
    const noOfPages = totalRooms / no_of_docs_each_page;

    return sendResponse(
      "success",
      200,
      "Rooms retrieved successfully.",
      rooms,
      current_page_number,
      currentRoomsCount,
      Math.ceil(noOfPages - current_page_number),
      totalRooms,
    );
  } catch (err) {
    return sendResponse("fail", 500, "Internal server error");
  }
}
