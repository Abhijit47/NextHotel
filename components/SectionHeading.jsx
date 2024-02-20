export default function SectionHeading({ heading, subHeading }) {
  return (
    <div className="grid gap-y-2 pl-4">
      <h2 className="text-2xl font-medium capitalize text-blue-800 md:text-3xl md:font-semibold lg:text-4xl lg:font-bold">
        {heading}&nbsp;
        <span className="text-stone-800">{subHeading}</span>
      </h2>
      <div className="flex items-center gap-x-4">
        <div className="h-[1.5px] w-32 bg-blue-800"></div>
        <div className="h-[1.5px] w-14 bg-blue-400"></div>
        <div className="h-[1.5px] w-10 bg-blue-200"></div>
      </div>
    </div>
  );
}
