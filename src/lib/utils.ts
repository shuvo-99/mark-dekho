import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import {
  BookOpen,
  ClipboardList,
  FileText,
  Bell,
  FolderKanban,
  GraduationCap,
  MessageSquare,
  PenBox,
  UserCheck,
  LaptopMinimal,
} from "lucide-react";
import { Colors, SectionItem, StudentRawData } from "@/types/student";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function transformSections(
  data: StudentRawData,
  colors: Colors,
): SectionItem[] {
  const quizzes = Object.keys(data)
    .filter((key) => key.startsWith("quiz"))
    .sort((a, b) => {
      const numA = Number(a.replace("quiz", ""));
      const numB = Number(b.replace("quiz", ""));
      return numA - numB;
    })
    .map((key) => String(data[key]));

  const assignments = Object.keys(data)
    .filter((key) => key.startsWith("assignment"))
    .sort((a, b) => {
      const numA = Number(a.replace("assignment", ""));
      const numB = Number(b.replace("assignment", ""));
      return numA - numB;
    })
    .map((key) => String(data[key]));

  const evaluations: any[] = Object.keys(data)
    .filter((key) => key.startsWith("eval"))
    .sort((a, b) => {
      const numA = Number(a.replace("eval", ""));
      const numB = Number(b.replace("eval", ""));
      return numA - numB;
    })
    .map((key) => String(data[key]));

  return [
    {
      id: "attendance",
      title: "Attendance",
      icon: UserCheck,
      color: colors.coral,
      bg: "rgba(255,107,91,0.10)",
      suffix: "%",
      value: String(data.attendance || ""),
    },
    {
      id: "assignment",
      title: "Assignment",
      icon: ClipboardList,
      color: colors.amber,
      bg: "rgba(245,166,35,0.10)",
      suffix: "/5",
      value: String(data.totalAssignment || ""),
      details: assignments,
    },
    {
      id: "quiz",
      title: "Quiz",
      icon: PenBox,
      color: colors.purple,
      bg: "rgba(123,135,245,0.10)",
      suffix: "/15",
      value: String(data.totalQuiz || ""),
      details: quizzes,
    },
    {
      id: "midterm",
      title: "Midterm",
      icon: FileText,
      color: colors.green,
      bg: "rgba(45,212,160,0.10)",
      suffix: "/25",
      value: String(data.mid || ""),
    },
    {
      id: "project",
      title: "Project",
      icon: FolderKanban,
      color: colors.coral,
      bg: "rgba(255,107,91,0.10)",
      suffix: "/20",
      value: String(data.project || ""),
    },
    {
      id: "evaluation",
      title: "Evaluation",
      icon: BookOpen,
      color: colors.amber,
      bg: "rgba(245,166,35,0.10)",
      suffix: "%",
      value: String(data.totalEval || ""),
      details: evaluations,
    },
    {
      id: "lab",
      title: "Lab",
      icon: LaptopMinimal,
      color: colors.purple,
      bg: "rgba(123,135,245,0.10)",
      suffix: "/10",
      value: String(data.lab || ""),
    },
    {
      id: "final",
      title: "Final",
      icon: GraduationCap,
      color: colors.green,
      bg: "rgba(45,212,160,0.10)",
      suffix: "/35",
      value: String(data.final || ""),
    },
  ];
}
