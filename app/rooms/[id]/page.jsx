import Link from "next/link";
import Image from "next/image";
import ReviewCard from "@/components/ReviewCard";

const API_URL = process.env.API_URL;

async function getRoom(roomId) {
  try {
    const res = await fetch(`${API_URL}/api/rooms/${roomId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error(`Room ${roomId} not found`);
    }

    return res.json();
  } catch (err) {
    throw new Error("Data fecthing is not successful.");
  }
}

export default async function RoomPage({ params }) {
  const { data } = await getRoom(params.id);

  return (
    <section>
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full object-cover"
                    src={data?.images?.picture_url}
                    alt={data?.name}
                    fill
                    priority
                  />
                  <div className="absolute inset-0 bg-amber-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">{data?.name}</span>
                    <span className="block text-indigo-200">
                      customer support
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                    {data?.space}
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <Link
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                      >
                        Get started
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                      >
                        Live demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
                Trusted by over 5 very average small businesses
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <Image
                    className="h-12"
                    src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                    alt="Tuple"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <Image
                    className="h-12"
                    src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                    alt="Mirage"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <Image
                    className="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <Image
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <Image
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                    width={300}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16">
          <h3 className="font-semibold text-stone-800">Amenities</h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {data?.amenities?.map((amenitiy, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800"
              >
                {amenitiy}
              </span>
            ))}
          </div>
        </div>

        {/* More main page content here... */}
        <h3 className="font-semibold text-stone-800">Reviews</h3>
        <ReviewCard reviews={data?.reviews} />
      </main>
    </section>
  );
}
