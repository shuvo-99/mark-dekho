"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { HistogramBucket } from "@/types/student";

type Props = {
  buckets: HistogramBucket[];
  color: string;
};

export default function ClassHistogram({ buckets, color }: Props) {
  if (buckets.every((bucket) => bucket.count === 0)) return null;

  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={buckets} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="rgba(13,27,42,0.08)" vertical={false} />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 11, fill: "#8a9ab0" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#8a9ab0" }}
            axisLine={false}
            tickLine={false}
            width={32}
            allowDecimals={false}
          />
          <Tooltip
            formatter={(value, _name, props) => {
              const bucket = props.payload as HistogramBucket;
              return [
                `${value} student${value === 1 ? "" : "s"} (${bucket.percent}%)`,
                "Count",
              ];
            }}
            cursor={{ fill: "rgba(13,27,42,0.04)" }}
            contentStyle={{
              borderRadius: 8,
              border: "1px solid rgba(13,27,42,0.1)",
              fontSize: 12,
            }}
          />
          <Bar dataKey="count" fill={color} radius={[6, 6, 0, 0]} maxBarSize={40}>
            <LabelList
              dataKey="percent"
              position="top"
              formatter={(value) =>
                typeof value === "number" && value > 0 ? `${value}%` : ""
              }
              style={{ fontSize: 10, fill: "#8a9ab0" }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
