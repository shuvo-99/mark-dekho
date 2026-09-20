import { TriangleAlert } from "lucide-react";

type Props = {
  value: string;
  threshold: number;
};

export default function BarredBanner({ value, threshold }: Props) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[rgba(255,107,91,0.3)] bg-[rgba(255,107,91,0.08)] px-5 py-4">
      <TriangleAlert className="shrink-0" size={20} color="#ff6b5b" />
      <p className="text-sm text-[#0d1b2a]">
        <span className="font-semibold">Barred: </span>
        your attendance is <span className="font-semibold">{value}%</span>, below the required <span className="font-semibold">{threshold}%</span>. Contact your faculty with required documents
      </p>
    </div>
  );
}
