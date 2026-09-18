import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import {
  BookOpen,
  ClipboardList,
  FileText,
  FolderKanban,
  GraduationCap,
  PenBox,
  UserCheck,
  LaptopMinimal,
} from "lucide-react";
import {
  Colors,
  DetailItem,
  RemarkItem,
  SectionItem,
  StudentRawData,
} from "@/types/student";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function getFieldByPrefix(data: StudentRawData, prefix: string) {
  const key = Object.keys(data).find((k) => k.startsWith(prefix));

  if (!key) return null;

  return {
    value: String(data[key] ?? ""),
    suffix: key.includes("_") ? `/${key.split("_")[1]}` : "",
  };
}

function getDetails(data: StudentRawData, prefix: string): DetailItem[] {
  return Object.keys(data)
    .filter((key) => new RegExp(`^${prefix}\\d+_\\d+$`).test(key))
    .sort((a, b) => {
      const numA = Number(a.match(/\d+/)?.[0] || 0);
      const numB = Number(b.match(/\d+/)?.[0] || 0);
      return numA - numB;
    })
    .map((key) => ({
      value: String(data[key] ?? ""),
      suffix: `/${key.split("_")[1]}`,
    }));
}

function getRemarks(data: StudentRawData, prefix: string): RemarkItem[] {
  return Object.keys(data)
    .filter((key) => new RegExp(`^${prefix}\\d+_remark$`, "i").test(key))
    .map((key) => ({
      index: Number(key.match(/\d+/)?.[0] || 0),
      text: String(data[key] ?? "").trim(),
    }))
    .filter((remark) => remark.text.length > 0)
    .sort((a, b) => a.index - b.index);
}

export function transformSections(
  data: StudentRawData,
  colors: Colors,
): SectionItem[] {
  const sections: SectionItem[] = [];

  // Attendance (always shown)
  sections.push({
    id: "attendance",
    title: "Attendance",
    icon: UserCheck,
    color: colors.coral,
    bg: "rgba(255,107,91,0.10)",
    suffix: "%",
    value: String(data.attendance ?? ""),
  });

  const configs = [
    {
      id: "assignment",
      title: "Assignment",
      totalPrefix: "totalAssignment",
      detailPrefix: "assignment",
      icon: ClipboardList,
      color: colors.amber,
      bg: "rgba(245,166,35,0.10)",
    },
    {
      id: "quiz",
      title: "Quiz",
      totalPrefix: "totalQuiz",
      detailPrefix: "quiz",
      icon: PenBox,
      color: colors.purple,
      bg: "rgba(123,135,245,0.10)",
    },
    {
      id: "assessment",
      title: "Assessment",
      totalPrefix: "totalAssessment",
      detailPrefix: "assessment",
      icon: PenBox,
      color: colors.purple,
      bg: "rgba(123,135,245,0.10)",
    },
    {
      id: "midterm",
      title: "Midterm",
      totalPrefix: "mid",
      icon: FileText,
      color: colors.green,
      bg: "rgba(45,212,160,0.10)",
    },
    {
      id: "attendanceMarks",
      title: "Attendance Marks",
      totalPrefix: "attendanceMark",
      icon: UserCheck,
      color: colors.coral,
      bg: "rgba(255,107,91,0.10)",
    },
    {
      id: "project",
      title: "Project",
      totalPrefix: "project",
      icon: FolderKanban,
      color: colors.coral,
      bg: "rgba(255,107,91,0.10)",
    },
    {
      id: "evaluation",
      title: "Evaluation",
      totalPrefix: "totalEval",
      detailPrefix: "eval",
      icon: BookOpen,
      color: colors.amber,
      bg: "rgba(245,166,35,0.10)",
    },
    {
      id: "lab",
      title: "Lab",
      totalPrefix: "lab",
      icon: LaptopMinimal,
      color: colors.purple,
      bg: "rgba(123,135,245,0.10)",
    },
    {
      id: "final",
      title: "Final",
      totalPrefix: "final",
      icon: GraduationCap,
      color: colors.green,
      bg: "rgba(45,212,160,0.10)",
    },
  ];

  configs.forEach((config) => {
    const total = getFieldByPrefix(data, config.totalPrefix);

    // Skip if this column doesn't exist in the sheet
    if (!total) return;

    sections.push({
      id: config.id,
      title: config.title,
      icon: config.icon,
      color: config.color,
      bg: config.bg,
      suffix: total.suffix,
      value: total.value,
      details: config.detailPrefix
        ? getDetails(data, config.detailPrefix)
        : undefined,
      remarks: config.detailPrefix
        ? getRemarks(data, config.detailPrefix)
        : undefined,
    });
  });

  return sections;
}
