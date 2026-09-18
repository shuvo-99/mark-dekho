"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DetailItem } from "@/types/student";

type Props = {
  details: DetailItem[];
  title: string;
  color: string;
};

function toPercentage(item: DetailItem): number | null {
  if (item.value.trim() === "") return null;

  const value = Number(item.value);
  const max = Number(item.suffix.replace("/", ""));

  if (Number.isNaN(value) || !max) return null;

  return Math.round((value / max) * 1000) / 10;
}

export default function TrendChart({ details, title, color }: Props) {
  const data = details
    .map((item, index) => ({
      name: `${title} ${index + 1}`,
      score: toPercentage(item),
    }))
    .filter((point): point is { name: string; score: number } => point.score !== null);

  if (data.length < 2) return null;

  return (
    <div className="h-40 mb-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="rgba(13,27,42,0.08)" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: "#8a9ab0" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#8a9ab0" }}
            axisLine={false}
            tickLine={false}
            width={40}
            domain={[0, 100]}
            unit="%"
          />
          <Tooltip
            formatter={(value) => [`${value}%`, "Score"]}
            cursor={{ fill: "rgba(13,27,42,0.04)" }}
            contentStyle={{
              borderRadius: 8,
              border: "1px solid rgba(13,27,42,0.1)",
              fontSize: 12,
            }}
          />
          <Bar dataKey="score" fill={color} radius={[6, 6, 0, 0]} maxBarSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
