import { SvgSpinners3DotsScale } from "@/assets/icons";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="grid h-screen place-items-center">
      <SvgSpinners3DotsScale className="w-20 h-20" />
    </div>
  );
}
