export async function GET(request, response) {
  console.log("GET request to /api/all-rooms/[id]", response);
  return Response.json({
    message: "GET request to /api/all-rooms/[id]",
    id: { response },
  });
}
