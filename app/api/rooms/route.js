import Room from "@/models/Room";
import connectDB from "@/lib/connectDB";
import { sendResponse } from "@/lib/helpers";

// export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectDB();

    const rooms = await Room.find({}).lean().limit(8);

    return sendResponse("success", 200, "Rooms retrieved successfully.", rooms);
  } catch (err) {
    return sendResponse("fail", 500, "Something went wrong");
  }
}
