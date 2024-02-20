import { MdiChevronUp, PrimeCheckCircle } from "@/assets/icons";
import { classNames } from "@/lib/helpers";

export default function AccordionItem({
  curOpen,
  onOpen,
  num,
  title,
  children,
}) {
  const isOpen = num === curOpen;

  function handleToggle() {
    // onOpen(num);
    onOpen(isOpen ? null : num);
  }

  return (
    <article
      className={`item ${isOpen ? "open" : ""} grid gap-y-4 rounded-md p-8 py-6 ring-1 ring-slate-300 transition-all delay-75 duration-500 ease-in-out`}
      onClick={handleToggle}
    >
      <dt className="cursor-pointer select-none">
        {/* <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p> */}
        <div className="flex gap-x-4">
          <div>
            <PrimeCheckCircle className="h-10 w-10 rounded-full bg-slate-600 bg-opacity-20 p-2 text-blue-800" />
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="title text-sm font-medium text-stone-800">{title}</p>
            {/* <p className="icon">{isOpen ? "-" : "+"}</p> */}
            <div>
              <MdiChevronUp
                className={classNames(
                  isOpen && "rotate-180",
                  "h-4 w-4 text-stone-800",
                )}
              />
            </div>
          </div>
        </div>
      </dt>

      {isOpen && (
        <dd className="content-box select-none text-xs font-normal">
          {children}
        </dd>
      )}
    </article>
  );
}
