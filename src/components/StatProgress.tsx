const RISK_COLOR = "#ff6b5b";
const WARN_COLOR = "#f5a623";
const GOOD_COLOR = "#2dd4a0";

const DEFAULT_RISK_THRESHOLD = 70;
const WARN_BUFFER = 10;

type Props = {
  value: string;
  suffix: string;
  color: string;
  risk?: boolean;
  threshold?: number;
};

function toPercent(value: string, suffix: string): number | null {
  if (value.trim() === "") return null;

  const num = Number(value);
  if (Number.isNaN(num)) return null;

  if (suffix === "%") return Math.min(100, Math.max(0, num));

  const max = Number(suffix.replace("/", ""));
  if (!max) return null;

  return Math.min(100, Math.max(0, (num / max) * 100));
}

export default function StatProgress({
  value,
  suffix,
  color,
  risk = false,
  threshold,
}: Props) {
  const percent = toPercent(value, suffix);

  if (percent === null) return null;

  const riskCutoff = threshold ?? DEFAULT_RISK_THRESHOLD;

  const fill = risk
    ? percent < riskCutoff
      ? RISK_COLOR
      : percent < riskCutoff + WARN_BUFFER
        ? WARN_COLOR
        : GOOD_COLOR
    : color;

  return (
    <div className="h-1.5 w-full rounded-full bg-[rgba(13,27,42,0.08)] overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{ width: `${percent}%`, backgroundColor: fill }}
      />
    </div>
  );
}
