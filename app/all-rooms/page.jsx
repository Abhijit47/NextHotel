import RoomPage from "@/components/RoomPage";

async function getAllRooms() {
  // try {
  const res = await fetch("http://localhost:3000/api/all-rooms", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!res.ok) {
    // return "Failed to fetch rooms";
    throw new Error("Failed to fetch rooms");
  }

  return res.json();
  // } catch (err) {
  //   console.log(err.message);
  //   return "Something went wrong in server";
  // }
}

export default async function AllRoomsPage({ params }) {
  const { data, currentPage, currentResult, totalRecord } = await getAllRooms();

  return (
    <section className="flex h-full">
      <RoomPage
        data={data}
        currentPage={currentPage}
        currentResult={currentResult}
        totalRecord={totalRecord}
      />
    </section>
  );
}
