import { connectDB } from "@/lib/connectDB";
import Room from "@/models/Room";
import { sendResponse } from "@/lib/helpers";

export async function GET(request, response) {
  try {
    await connectDB();

    const { id } = await response.params;
    if (!id || id.length < 8) {
      return sendResponse("fail", 400, "Bad Request");
    }

    const room = await Room.findOne({ _id: id }).lean();

    return sendResponse("success", 200, "Room retrieved successfully.", room);
  } catch (err) {
    return sendResponse("fail", 500, "Internal server error");
  }
}
