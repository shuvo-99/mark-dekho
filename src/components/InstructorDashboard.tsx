"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, TriangleAlert } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  computeComponentAverages,
  computeFlaggedStudents,
  computeTotalAverage,
  computeTotalHistogram,
} from "@/lib/classStats";
import StatProgress from "./StatProgress";
import ClassHistogram from "./ClassHistogram";
import StudentDashboard from "./studentDashboard";
import { StudentRawData } from "@/types/student";

type Props = {
  roster: StudentRawData[];
};

const serif = { fontFamily: "'DM Serif Display', serif" };

const colors = {
  navy: "#0d1b2a",
  amber: "#f5a623",
  textOnDark: "#e8e2d8",
  textMuted: "#8a9ab0",
  green: "#2dd4a0",
  coral: "#ff6b5b",
  purple: "#7b87f5",
};

function onlyStudents(roster: StudentRawData[]) {
  return roster.filter((row) => (row.role ?? "student") === "student");
}

export default function InstructorDashboard({ roster }: Props) {
  
  const [selectedEmail, setSelectedEmail] = useState("");

  const classStudents = useMemo(() => onlyStudents(roster), [roster]);
  const componentAverages = useMemo(
    () => computeComponentAverages(roster, colors),
    [roster],
  );
  const totalAverage = useMemo(() => computeTotalAverage(roster), [roster]);
  const histogram = useMemo(() => computeTotalHistogram(roster), [roster]);
  const flagged = useMemo(() => computeFlaggedStudents(roster, colors), [roster]);

  const selectedStudent = classStudents.find(
    (student) => student.email === selectedEmail,
  );

  if (selectedStudent) {
    return (
      <div className="relative">
        <button
          onClick={() => setSelectedEmail("")}
          className={cn(
            "fixed top-24 right-4 md:right-8 z-40",
            "flex items-center gap-2 rounded-full",
            "bg-[#0d1b2a] text-[#e8e2d8] text-xs font-medium",
            "px-4 py-2 shadow-lg cursor-pointer",
            "hover:bg-[#1a2e44] transition-colors",
          )}
        >
          <ArrowLeft size={14} />
          Back to instructor view
        </button>
        <StudentDashboard student={selectedStudent} />
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden pt-20">
      <main className="max-w-5xl mx-auto p-4 md:p-8 space-y-10">
        <div>
          <h2 className="text-2xl font-medium mb-1 text-[#171717]" style={serif}>
            Class Overview
          </h2>
          <p className="text-sm text-[#8a9ab0]">
            {classStudents.length} student{classStudents.length === 1 ? "" : "s"}
            {totalAverage !== null && ` · Class average ${totalAverage}/100`}
          </p>
        </div>

        {/* Component averages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {componentAverages.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.id}
                className="rounded-2xl border border-[rgba(13,27,42,0.1)] bg-white"
              >
                <CardContent className="px-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div
                        className="h-8 w-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: stat.bg }}
                      >
                        <Icon size={20} color={stat.color} />
                      </div>
                      <p className="text-md text-[#8a9ab0]">{stat.title}</p>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[28px] font-light text-[#0d1b2a]">
                        {stat.average === null ? "-" : stat.average}
                      </span>
                      <span className="text-sm text-[#8a9ab0]">{stat.suffix}</span>
                    </div>
                  </div>
                  <StatProgress
                    value={stat.average === null ? "" : String(stat.average)}
                    suffix={stat.suffix}
                    color={stat.color}
                    risk={stat.id === "attendance"}
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Score distribution */}
        <Card className="rounded-2xl border border-[rgba(13,27,42,0.1)] bg-white">
          <CardContent className="px-6 py-5">
            <h3 className="text-lg mb-4 text-[#0d1b2a]" style={serif}>
              Score Distribution
            </h3>
            <ClassHistogram buckets={histogram} color={colors.purple} />
          </CardContent>
        </Card>

        {/* Flagged students */}
        <div>
          <h3 className="text-lg mb-4 text-[#0d1b2a]" style={serif}>
            Flagged: Low Attendance
          </h3>
          {flagged.length === 0 ? (
            <p className="text-sm text-[#8a9ab0]">
              No students below the attendance threshold.
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {flagged.map((student) => (
                <div
                  key={student.email}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded-2xl",
                    "border border-[rgba(255,107,91,0.3)] bg-[rgba(255,107,91,0.08)]",
                    "px-5 py-4",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <TriangleAlert className="shrink-0" size={20} color="#ff6b5b" />
                    <div>
                      <p className="text-sm font-semibold text-[#0d1b2a]">
                        {student.name}
                      </p>
                      <p className="text-xs text-[#8a9ab0]">{student.student_id}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-sm text-[#0d1b2a]">
                      <span className="font-semibold">{student.value}%</span> / required{" "}
                      {student.barThreshold}%
                    </p>
                    <button
                      onClick={() => setSelectedEmail(student.email)}
                      className="text-xs font-medium underline text-[#0d1b2a] hover:text-[#ff6b5b] cursor-pointer"
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* View as student */}
        <Card className="rounded-2xl border border-[rgba(13,27,42,0.1)] bg-white">
          <CardContent className="px-6 py-5">
            <h3 className="text-lg mb-1 text-[#0d1b2a]" style={serif}>
              View as Student
            </h3>
            <p className="text-sm text-[#8a9ab0] mb-4">
              See exactly how a student&apos;s dashboard looks right now.
            </p>
            <select
              value={selectedEmail}
              onChange={(e) => setSelectedEmail(e.target.value)}
              className="w-full rounded-lg border border-[rgba(13,27,42,0.15)] px-3 py-2 text-sm text-[#0d1b2a] bg-white cursor-pointer"
            >
              <option value="">Select a student…</option>
              {classStudents.map((student) => (
                <option key={student.email} value={student.email}>
                  {student.name} ({student.student_id})
                </option>
              ))}
            </select>
          </CardContent>
        </Card>
      </main>
    </section>
  );
}
