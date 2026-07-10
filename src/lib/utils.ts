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
import {
  Colors,
  DetailItem,
  SectionItem,
  StudentRawData,
} from "@/types/student";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function transformSections(
//   data: StudentRawData,
//   colors: Colors,
// ): SectionItem[] {
//   const quizzes = Object.keys(data)
//     .filter((key) => key.startsWith("quiz"))
//     .sort((a, b) => {
//       const numA = Number(a.replace("quiz", ""));
//       const numB = Number(b.replace("quiz", ""));
//       return numA - numB;
//     })
//     .map((key) => String(data[key]));

//   const assignments = Object.keys(data)
//     .filter((key) => key.startsWith("assignment"))
//     .sort((a, b) => {
//       const numA = Number(a.replace("assignment", ""));
//       const numB = Number(b.replace("assignment", ""));
//       return numA - numB;
//     })
//     .map((key) => String(data[key]));

//   const evaluations: any[] = Object.keys(data)
//     .filter((key) => key.startsWith("eval"))
//     .sort((a, b) => {
//       const numA = Number(a.replace("eval", ""));
//       const numB = Number(b.replace("eval", ""));
//       return numA - numB;
//     })
//     .map((key) => String(data[key]));

//   return [
//     {
//       id: "attendance",
//       title: "Attendance",
//       icon: UserCheck,
//       color: colors.coral,
//       bg: "rgba(255,107,91,0.10)",
//       suffix: "%",
//       value: String(data.attendance || ""),
//     },
//     {
//       id: "assignment",
//       title: "Assignment",
//       icon: ClipboardList,
//       color: colors.amber,
//       bg: "rgba(245,166,35,0.10)",
//       suffix: "/5",
//       value: String(data.totalAssignment || ""),
//       details: assignments,
//     },
//     {
//       id: "quiz",
//       title: "Quiz",
//       icon: PenBox,
//       color: colors.purple,
//       bg: "rgba(123,135,245,0.10)",
//       suffix: "/15",
//       value: String(data.totalQuiz || ""),
//       details: quizzes,
//     },
//     {
//       id: "midterm",
//       title: "Midterm",
//       icon: FileText,
//       color: colors.green,
//       bg: "rgba(45,212,160,0.10)",
//       suffix: "/25",
//       value: String(data.mid || ""),
//     },
//     {
//       id: "project",
//       title: "Project",
//       icon: FolderKanban,
//       color: colors.coral,
//       bg: "rgba(255,107,91,0.10)",
//       suffix: "/20",
//       value: String(data.project || ""),
//     },
//     {
//       id: "evaluation",
//       title: "Evaluation",
//       icon: BookOpen,
//       color: colors.amber,
//       bg: "rgba(245,166,35,0.10)",
//       suffix: "%",
//       value: String(data.totalEval || ""),
//       details: evaluations,
//     },
//     {
//       id: "lab",
//       title: "Lab",
//       icon: LaptopMinimal,
//       color: colors.purple,
//       bg: "rgba(123,135,245,0.10)",
//       suffix: "/10",
//       value: String(data.lab || ""),
//     },
//     {
//       id: "final",
//       title: "Final",
//       icon: GraduationCap,
//       color: colors.green,
//       bg: "rgba(45,212,160,0.10)",
//       suffix: "/35",
//       value: String(data.final || ""),
//     },
//   ];
// }

// type DetailItem = {
//   value: string;
//   suffix: string;
// };

// ========================================================

// function getFieldByPrefix(data: StudentRawData, prefix: string) {
//   const key = Object.keys(data).find((k) => k.startsWith(prefix));

//   if (!key) {
//     return {
//       value: "",
//       suffix: "",
//     };
//   }

//   const suffix = key.includes("_") ? `/${key.split("_")[1]}` : "";

//   return {
//     value: String(data[key] ?? ""),
//     suffix,
//   };
// }

// function getDetails(data: StudentRawData, prefix: string): DetailItem[] {
//   return Object.keys(data)
//     .filter((key) => new RegExp(`^${prefix}\\d+_`).test(key))
//     .sort((a, b) => {
//       const numA = Number(a.match(/\d+/)?.[0] || 0);
//       const numB = Number(b.match(/\d+/)?.[0] || 0);
//       return numA - numB;
//     })
//     .map((key) => ({
//       value: String(data[key] ?? ""),
//       suffix: `/${key.split("_")[1]}`,
//     }));
// }



// export function transformSections(
//   data: StudentRawData,
//   colors: Colors,
// ): SectionItem[] {
//   const quizTotal = getFieldByPrefix(data, "totalQuiz");
//   const assignmentTotal = getFieldByPrefix(data, "totalAssignment");
//   const evalTotal = getFieldByPrefix(data, "totalEval");
//   const mid = getFieldByPrefix(data, "mid");
//   const project = getFieldByPrefix(data, "project");
//   const lab = getFieldByPrefix(data, "lab");
//   const final = getFieldByPrefix(data, "final");
//   const assessmentTotal = getFieldByPrefix(data, "totalAssessment");

//   const quizzes = getDetails(data, "quiz");
//   const assignments = getDetails(data, "assignment");
//   const evaluations = getDetails(data, "eval");
//   const assessments = getDetails(data, "assessment");

//   return [
//     {
//       id: "attendance",
//       title: "Attendance",
//       icon: UserCheck,
//       color: colors.coral,
//       bg: "rgba(255,107,91,0.10)",
//       suffix: "%",
//       value: String(data.attendance || ""),
//     },
//     {
//       id: "assignment",
//       title: "Assignment",
//       icon: ClipboardList,
//       color: colors.amber,
//       bg: "rgba(245,166,35,0.10)",
//       suffix: assignmentTotal.suffix,
//       value: assignmentTotal.value,
//       details: assignments,
//     },
//     {
//       id: "quiz",
//       title: "Quiz",
//       icon: PenBox,
//       color: colors.purple,
//       bg: "rgba(123,135,245,0.10)",
//       suffix: quizTotal.suffix,
//       value: quizTotal.value,
//       details: quizzes,
//     },
//     {
//       id: "assessment",
//       title: "Assessment",
//       icon: PenBox,
//       color: colors.purple,
//       bg: "rgba(123,135,245,0.10)",
//       suffix: assessmentTotal.suffix,
//       value: assessmentTotal.value,
//       details: assessments,
//     },
//     {
//       id: "midterm",
//       title: "Midterm",
//       icon: FileText,
//       color: colors.green,
//       bg: "rgba(45,212,160,0.10)",
//       suffix: mid.suffix,
//       value: mid.value,
//     },
//     {
//       id: "project",
//       title: "Project",
//       icon: FolderKanban,
//       color: colors.coral,
//       bg: "rgba(255,107,91,0.10)",
//       suffix: project.suffix,
//       value: project.value,
//     },
//     {
//       id: "evaluation",
//       title: "Evaluation",
//       icon: BookOpen,
//       color: colors.amber,
//       bg: "rgba(245,166,35,0.10)",
//       suffix: evalTotal.suffix,
//       value: evalTotal.value,
//       details: evaluations,
//     },
//     {
//       id: "lab",
//       title: "Lab",
//       icon: LaptopMinimal,
//       color: colors.purple,
//       bg: "rgba(123,135,245,0.10)",
//       suffix: lab.suffix,
//       value: lab.value,
//     },
//     {
//       id: "final",
//       title: "Final",
//       icon: GraduationCap,
//       color: colors.green,
//       bg: "rgba(45,212,160,0.10)",
//       suffix: final.suffix,
//       value: final.value,
//     },
//   ];
// }



// =================================


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
    .filter((key) => new RegExp(`^${prefix}\\d+_`).test(key))
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
    });
  });

  return sections;
}