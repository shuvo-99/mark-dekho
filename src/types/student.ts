// ======================
// RAW DATA TYPE
// ======================

import { LucideIcon } from "lucide-react";

export interface StudentRawData {
  course: string;
  email: string;
  name: string;
  student_id: string;

  attendance?: number | string;

  // quiz1?: number | string;
  // quiz2?: number | string;
  // quiz3?: number | string;
  // quiz4?: number | string;

  // totalQuiz?: number | string;

  // assignment1?: number | string;
  // assignment2?: number | string;

  // totalAssignment?: number | string;

  // eval1?: number | string;
  // eval2?: number | string;

  // totalEval?: number | string;
  // lab?: number | string;

  // mid?: number | string;
  // project?: number | string;
  // final?: number | string;

  total_100?: number | string;
  grade?: string;
  gpa_4?: string;

  // allows additional dynamic fields
  [key: string]: string | number | unknown;
}

// ======================
// SECTION TYPE
// ======================

export interface DetailItem {
  value: string;
  suffix: string;
}
export interface SectionItem {
  id: string;
  title: string;

  icon: LucideIcon; // or LucideIcon

  color: string;
  bg: string;

  suffix: string;

  value: string;

  // details?: (number | string)[];
  details?: DetailItem[];
}

// ======================
// COLORS TYPE
// ======================

export interface Colors {
  coral: string;
  amber: string;
  purple: string;
  green: string;
}
