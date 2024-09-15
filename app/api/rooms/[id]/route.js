import { connectDB } from "@/lib/connectDB";
import { sendResponse } from "@/lib/helpers";
import Room from "@/models/Room";

export async function GET(request, response) {
  try {
    await connectDB();

    const { id } = await response.params;
    if (!id) {
      return sendResponse("fail", 400, "Bad Request");
    }

    const room = await Room.findOne({ _id: id }).lean();

    return sendResponse("success", 200, "Room retrieved successfully.", room);
  } catch (err) {
    return sendResponse("fail", 500, "Internal server error");
  }
}
