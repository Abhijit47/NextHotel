import Image from "next/image";
import { propertyTypes } from "@/constants";
import SectionHeading from "./SectionHeading";

export default function PropertyTypes() {
  return (
    <div>
      <SectionHeading heading={"Property"} subHeading={"types"} />
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 px-4 md:grid-cols-2 md:gap-y-4 lg:grid-cols-4 xl:grid-cols-5">
        {propertyTypes.map((property) => (
          <div
            key={property.id}
            className="grid justify-items-center gap-y-4 py-16 shadow-md"
          >
            <div>
              <Image
                src={property.icon}
                alt={property.name}
                width={100}
                height={100}
                priority
              />
            </div>

            <h3 className="text-lg font-semibold">{property.name}</h3>
            <h5 className="rounded-full bg-slate-100 px-3 py-1 text-sm font-normal shadow-md">
              {property.badge}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
