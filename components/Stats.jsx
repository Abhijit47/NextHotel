import { stats } from "@/constants";

export default function Stats() {
  return (
    <div className="bg-slate-300 px-8 py-8">
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
        {stats.map((stat) => (
          <dl
            key={stat.id}
            className="relative grid justify-items-center gap-y-2 overflow-clip rounded-md bg-slate-50 px-8 py-12 shadow-md"
          >
            <dt>{<stat.icon className="h-10 w-10 text-blue-800" />}</dt>
            <dd className="text-3xl font-bold text-stone-800">{stat.status}</dd>
            <dd className="font-normal text-stone-700">{stat.statusText}</dd>
            <dd className="absolute bottom-0 right-0 translate-x-3 translate-y-3 -rotate-45">
              <stat.icon className="h-24 w-24 text-slate-400 text-opacity-15" />
            </dd>
          </dl>
        ))}
      </div>
    </div>
  );
}
