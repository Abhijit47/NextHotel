import Image from "next/image";

import CTA_Image from "@/public/cta-img.png";

export default function CTA() {
  return (
    <div className="pb-16">
      <div className="rounded-2xl bg-blue-300 bg-opacity-50">
        <div className="relative grid grid-cols-1 items-center lg:grid-cols-2">
          <div className="grid gap-y-4 p-16">
            <h4 className="text-4xl font-bold leading-tight text-blue-800">
              Subscribe to get the latest news for you!
            </h4>
            <form action="#">
              <div className="flex justify-between rounded-md bg-white p-2">
                <label
                  htmlFor="email"
                  className="sr-only block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="border-bg border-gray-3000 mt-1 w-full focus-within:border-indigo-600">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full border-0 border-b border-transparent bg-transparent focus:border-indigo-600 focus:ring-0 sm:text-sm"
                    placeholder="example@email.com"
                  />
                </div>
                <button
                  type="button"
                  className="rounded-md bg-blue-700 px-4 py-2 text-sm text-slate-50 shadow-md transition-all delay-75 duration-500 ease-in-out hover:shadow-none"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="aspect-square relative h-full w-full justify-self-center">
            <Image
              src={CTA_Image}
              alt="cta-image"
              fill={true}
              sizes={"(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"}
              placeholder={"blur"}
              blurDataURL={CTA_Image.blurDataURL}
              priority={false}
              // width={463}
              // height={519}
              className="h-fit w-fit object-cover"
            />
          </div>
          {/* <div className="absolute top-0 right-0 translate-x-0 -translate-y-20 justify-self-center">
            <Image
              src={"/cta-img.png"}
              width={463}
              height={519}
              alt="cta-image"
              priority={false}
              className="object-cover size-10/12"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
