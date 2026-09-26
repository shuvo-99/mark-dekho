import {
  Colors,
  ComponentStat,
  FlaggedStudent,
  HistogramBucket,
  StudentRawData,
} from "@/types/student";
import { transformSections } from "./utils";

const DEFAULT_ATTENDANCE_THRESHOLD = 70;

// University grading scale, highest cutoff first — bands must stay sorted
// descending by `min` since scoreToGrade() takes the first match.
const GRADE_BANDS = [
  { label: "A+", min: 97 },
  { label: "A", min: 90 },
  { label: "A-", min: 85 },
  { label: "B+", min: 80 },
  { label: "B", min: 75 },
  { label: "B-", min: 70 },
  { label: "C+", min: 65 },
  { label: "C", min: 60 },
  { label: "C-", min: 57 },
  { label: "D+", min: 55 },
  { label: "D", min: 52 },
  { label: "D-", min: 50 },
  { label: "F", min: -Infinity },
];

function scoreToGrade(score: number): string {
  return GRADE_BANDS.find((band) => score >= band.min)!.label;
}

function onlyStudents(roster: StudentRawData[]): StudentRawData[] {
  return roster.filter((row) => (row.role ?? "student") === "student");
}

export function computeComponentAverages(
  roster: StudentRawData[],
  colors: Colors,
): ComponentStat[] {
  const students = onlyStudents(roster);
  const byId = new Map<string, { meta: ComponentStat; sum: number; count: number }>();

  students.forEach((student) => {
    transformSections(student, colors).forEach((section) => {
      const numeric = Number(section.value);
      if (section.value.trim() === "" || Number.isNaN(numeric)) return;

      const existing = byId.get(section.id);
      if (existing) {
        existing.sum += numeric;
        existing.count += 1;
        return;
      }

      byId.set(section.id, {
        meta: {
          id: section.id,
          title: section.title,
          icon: section.icon,
          color: section.color,
          bg: section.bg,
          suffix: section.suffix,
          average: null,
          count: 0,
        },
        sum: numeric,
        count: 1,
      });
    });
  });

  return Array.from(byId.values()).map(({ meta, sum, count }) => ({
    ...meta,
    average: count > 0 ? Math.round((sum / count) * 10) / 10 : null,
    count,
  }));
}

export function computeTotalAverage(roster: StudentRawData[]): number | null {
  const students = onlyStudents(roster);
  const totals = students
    .map((student) => Number(student.total_100))
    .filter((value) => !Number.isNaN(value));

  if (totals.length === 0) return null;

  return Math.round((totals.reduce((sum, value) => sum + value, 0) / totals.length) * 10) / 10;
}

export function computeTotalHistogram(roster: StudentRawData[]): HistogramBucket[] {
  const students = onlyStudents(roster);
  const counts = new Map<string, number>(
    [...GRADE_BANDS].reverse().map((band) => [band.label, 0]),
  );

  let graded = 0;
  students.forEach((student) => {
    const total = Number(student.total_100);
    if (student.total_100 === "" || student.total_100 == null || Number.isNaN(total)) {
      return;
    }

    const grade = scoreToGrade(total);
    counts.set(grade, (counts.get(grade) ?? 0) + 1);
    graded += 1;
  });

  return Array.from(counts.entries()).map(([label, count]) => ({
    label,
    count,
    percent: graded > 0 ? Math.round((count / graded) * 1000) / 10 : 0,
  }));
}

export function computeFlaggedStudents(
  roster: StudentRawData[],
  colors: Colors,
): FlaggedStudent[] {
  const students = onlyStudents(roster);

  return students
    .map((student) => {
      const attendance = transformSections(student, colors).find(
        (section) => section.id === "attendance",
      );
      if (!attendance || attendance.value.trim() === "") return null;

      const value = Number(attendance.value);
      if (Number.isNaN(value)) return null;

      const barThreshold = attendance.barThreshold ?? DEFAULT_ATTENDANCE_THRESHOLD;
      if (value >= barThreshold) return null;

      return {
        email: student.email,
        name: student.name,
        student_id: student.student_id,
        value: attendance.value,
        barThreshold,
      };
    })
    .filter((entry): entry is FlaggedStudent => entry !== null)
    .sort((a, b) => Number(a.value) - Number(b.value));
}
