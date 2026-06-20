"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn, transformSections } from "@/lib/utils";
import { motion } from "framer-motion";
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
  LucideIcon,
} from "lucide-react";
import AvatarDemo from "./avatar";
import { SectionItem, StudentRawData } from "@/types/student";

type Prop = {
  student: StudentRawData;
};
type StatProps = {
  stats: SectionItem[];
};

// ─── Tiny style helpers ────────────────────────────────────────────────────────
const serif = { fontFamily: "'DM Serif Display', serif" };
const sans = { fontFamily: "'DM Sans', sans-serif" };

// ─── Design Tokens ────────────────────────────────────────────────────────────
const colors = {
  navy: "#0d1b2a",
  navyMid: "#1a2e44",
  navyLight: "#243d57",
  amber: "#f5a623",
  amberLight: "#ffc85c",
  amberPale: "#fff7e6",
  cream: "#faf8f4",
  textOnDark: "#e8e2d8",
  textMuted: "#8a9ab0",
  green: "#2dd4a0",
  coral: "#ff6b5b",
  purple: "#7b87f5",
  borderLight: "rgba(255,255,255,0.08)",
  borderCream: "rgba(13,27,42,0.1)",
};

const sections = [
  {
    id: "attendance",
    title: "Attendance",
    icon: UserCheck,
    color: colors.coral,
    // bg: "#ff6b5b",
    bg: "rgba(255,107,91,0.10)",
    suffix: "%",
    value: "92",
  },
  {
    id: "assignments",
    title: "Assignments",
    icon: ClipboardList,
    color: colors.amber,
    // bg: "#f5a623",
    bg: "rgba(245,166,35,0.10)",
    suffix: "/5",
    value: "92",
  },
  {
    id: "quiz",
    title: "Quiz",
    icon: PenBox,
    color: colors.purple,
    // bg: "#7b87f5",
    bg: "rgba(123,135,245,0.10)",
    suffix: "%",
    value: "92",
  },
  {
    id: "midterm",
    title: "Midterm",
    icon: FileText,
    color: colors.green,
    // bg: "#2dd4a0",
    bg: "rgba(45,212,160,0.10)",
    suffix: "%",
    value: "92",
  },
  {
    id: "projects",
    title: "Projects",
    icon: FolderKanban,
    color: colors.coral,
    // bg: "#ff6b5b",
    bg: "rgba(255,107,91,0.10)",
    suffix: "%",
    value: "92",
  },
  {
    id: "evaluation",
    title: "Evaluation",
    icon: BookOpen,
    color: colors.amber,
    // bg: "#f5a623",
    bg: "rgba(245,166,35,0.10)",
    suffix: "%",
    value: "92",
  },
  {
    id: "lab",
    title: "Lab",
    icon: LaptopMinimal,
    color: colors.purple,
    // bg: "#7b87f5",
    bg: "rgba(123,135,245,0.10)",
    suffix: "%",
    value: "92",
  },
  {
    id: "final",
    title: "Final",
    icon: GraduationCap,
    color: colors.green,
    // bg: "#2dd4a0",
    bg: "rgba(45,212,160,0.10)",
    suffix: "%",
    value: "92",
  },
  // {
  //   id: "announcements",
  //   title: "Announcements",
  //   icon: Bell,
  // },
  // {
  //   id: "feedback",
  //   title: "Feedback",
  //   icon: MessageSquare,
  // },
];

function Tag({ children, style }: any) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 11,
        fontWeight: 600,
        padding: "3px 9px",
        borderRadius: 6,
        textTransform: "uppercase",
        letterSpacing: "0.4px",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

function StudentCard({ student }: Prop) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        background: "#fff",
        borderRadius: 16,
        border: `1px solid ${colors.borderCream}`,
        padding: 24,
        gridColumn: "span 2",
        display: "flex",
        gap: 20,
        alignItems: "flex-start",
      }}
    >
      {/* <Avatar initials="JD" /> */}
      <AvatarDemo />
      <div style={{ flex: 1 }}>
        <h3
          style={{
            ...serif,
            fontSize: 20,
            color: colors.navy,
            letterSpacing: "-0.3px",
            marginBottom: 12,
          }}
        >
          {student.name}
        </h3>

        {/* <div className="flex flex-col gap-2 sm:flex-row sm:justify-between "> */}
        <div className="flex flex-col gap-2 ">
          {[
            { label: "Email", value: `${student.email}` },
            { label: "Student ID", value: `${student.student_id}` },
          ].map(({ label, value }) => (
            <div key={label}>
              <div
                style={{
                  fontSize: 11,
                  color: colors.textMuted,
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                  fontWeight: 500,
                }}
              >
                {label}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: colors.navy,
                  fontWeight: 500,
                  marginTop: 2,
                }}
              >
                {value}
              </div>
            </div>
          ))}
          <div>
            <div
              style={{
                fontSize: 11,
                color: colors.textMuted,
                textTransform: "uppercase",
                letterSpacing: "0.6px",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              Course
            </div>
            <Tag
              style={{
                background: colors.amberPale,
                color: "#a0700a",
                border: "1px solid rgba(245,166,35,0.3)",
              }}
            >
              {student.course}
            </Tag>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function GradeCard({ student }: Prop) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      style={{
        background: colors.navy,
        borderRadius: 16,
        border: `1px solid ${colors.borderLight}`,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 4,
      }}
    >
      {/* <div
        style={{
          fontSize: 11,
          color: colors.textMuted,
          textTransform: "uppercase",
          letterSpacing: "0.6px",
        }}
      >
        Current Grade
      </div>
      <div
        style={{
          ...serif,
          fontSize: 64,
          color: colors.amber,
          lineHeight: 1,
          margin: "4px 0",
        }}
      >
        A
      </div>

      <div
        style={{
          background: "rgba(45,212,160,0.15)",
          color: colors.green,
          fontSize: 12,
          fontWeight: 600,
          padding: "4px 12px",
          borderRadius: 20,
          marginTop: 6,
        }}
      >
        GPA 4.00
      </div> */}

      {/* DIVIDER */}
      {/* <div
        style={{
          width: "100%",
          height: 1,
          background: colors.borderLight,
          margin: "12px 0",
        }}
      /> */}

      {/* TOTAL MARKS */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          gap: 12,
          marginTop: 6,
        }}
      >
        {/* TOTAL MARKS */}
        <div
          className={cn("flex-1 ", "border border-[#243d57] rounded-lg p-2")}
        >
          <div
            style={{
              fontSize: 11,
              color: colors.textMuted,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              marginBottom: 6,
            }}
          >
            Total Marks
          </div>

          <div
            // style={{
            //   fontSize: 28,
            //   fontWeight: 700,
            //   color: colors.textOnDark,
            // }}
            style={{
              ...serif,
            }}
            className={cn("text-6xl text-[#e8e2d8]")}
          >
            {student.total_100 === "" ? "-" : student.total_100}
          </div>
        </div>

        {/* Grade */}
        <div
          className={cn("flex-1 ", "border border-[#243d57] rounded-lg p-2")}
        >
          <div
            style={{
              fontSize: 11,
              color: colors.textMuted,
              textTransform: "uppercase",
              letterSpacing: "0.6px",
            }}
          >
            Current Grade
          </div>
          <div
            style={{
              ...serif,
            }}
            className={cn("text-6xl text-[#f5a623]")}
          >
            {student.grade === "" ? "-" : student.grade}
          </div>

          <div
            style={{
              background: "rgba(45,212,160,0.15)",
              color: colors.green,
              fontSize: 12,
              fontWeight: 600,
              padding: "4px 12px",
              borderRadius: 20,
              marginTop: 6,
            }}
          >
            GPA {student.gpa_4 === "" ? "-" : student.gpa_4}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ContentSections({ stats }: StatProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* {sections.map(({ id, title, icon, color, bg }, i) => { */}
      {stats.map((section, i) => {
        const Icon = section.icon;

        if (
          section.id === "final" ||
          section.id === "midterm" ||
          section.id === "project" ||
          section.id === "attendance" ||
          section.id === "lab" ||
          section.value === "null"
        ) {
          return null;
        }

        return (
          <motion.section
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            style={{ scrollMarginTop: 96 }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: 16,
                border: `1px solid ${colors.borderCream}`,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  borderBottom: `1px solid ${colors.borderCream}`,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: section.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: section.color,
                  }}
                >
                  <Icon size={18} />
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    color: colors.navy,
                    letterSpacing: "-0.2px",
                  }}
                >
                  {section.title}
                </h3>
                {/* <Tag style={{ marginLeft: "auto", ...tagStyle }}>{tag}</Tag> */}
              </div>
              <div style={{ padding: "20px 24px" }}>
                {/* <div
                  style={{
                    background: "#faf8f4",
                    borderRadius: 10,
                    border: `1px dashed rgba(13,27,42,0.12)`,
                    height: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: colors.textMuted,
                    fontSize: 13,
                  }}
                >
                  {section.title} content goes here
                </div> */}

                <div
                  className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-6
              "
                >
                  {section.details?.map((elem, index) => {
                    return (
                      <motion.a
                        key={index}
                        // href={`#${elem.id}`}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        // whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Card
                          className={cn(
                            "rounded-2xl",
                            "bg-[#faf8f4]",
                            "border border-[rgba(13,27,42,0.1)]",
                            "transition-all duration-300",
                            "h-full",
                          )}
                        >
                          <CardContent
                            className={cn(
                              "flex flex-col",
                              "items-center",
                              "justify-center",
                              "space-y-2",
                              "text-[#171717]",
                            )}
                          >
                            {/* <h3
                              className="text-3xl "
                              style={{
                                ...serif,
                              }}
                            >
                              {elem.value === "" ? "-" : elem.value}
                            </h3> */}
                            <div
                              style={{
                                display: "flex",
                                alignItems: "baseline",
                                gap: 2,
                              }}
                            >
                              <h3
                                className="text-3xl"
                                style={{
                                  ...serif,
                                }}
                              >
                                {elem.value === "" ? "-" : elem.value}
                              </h3>

                              <span
                                style={{
                                  fontSize: 14,
                                  color: colors.textMuted,
                                }}
                              >
                                {elem.suffix}
                              </span>
                            </div>

                            <h3 className="text-md  text-center">
                              {section.title + " " + (index + 1)}
                            </h3>
                          </CardContent>
                          {/* <CardContent
                            className={cn(
                              "px-6",
                              "flex",
                              // " flex-col",
                              "items-center",
                              "justify-between",
                              // "gap-4",
                            )}
                          >
                            <div className="space-y-2">
                              <div
                                className={cn(
                                  "h-12 w-12",
                                  "rounded-lg",
                                  "flex items-center justify-center",
                                )}
                                style={{
                                  backgroundColor: section.bg,
                                }}
                              >
                                <Icon size={30} color={section.color} />
                              </div>

                              <p className="text-lg text-[#8a9ab0]">
                                {section.title}
                              </p>
                            </div>

                            <div
                              style={{
                                display: "flex",
                                alignItems: "baseline",
                                gap: 2,
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 28,
                                  fontWeight: 300,
                                  color: colors.navy,
                                }}
                              >
                                {section.value}
                              </span>
                              <span
                                style={{
                                  fontSize: 14,
                                  color: colors.textMuted,
                                }}
                              >
                                {section.suffix}
                              </span>
                            </div>
                          </CardContent> */}
                        </Card>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}

function Statcard({ stats }: StatProps) {
  return (
    <div>
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-bold text-xl tracking-tight text-gradient"
      >
        <h2
          className="text-2xl font-medium mb-6 text-[#171717]"
          style={{ ...serif }}
        >
          Performance Overview
        </h2>
      </motion.span>

      <div
        className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-6
              "
      >
        {stats.map((section, index) => {
          if (section.value === "null") return null;
          const Icon: LucideIcon = section.icon;

          return (
            <motion.a
              key={section.id}
              href={`#${section.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                className={cn(
                  "rounded-2xl",
                  "border border-[rgba(13,27,42,0.1)] hover:border-[#f5a623]",
                  // "shadow-sm",
                  "hover:shadow-sm",
                  "transition-all duration-300",
                  "cursor-pointer",
                  "h-full",
                  "bg-white",
                )}
              >
                {/* <CardContent
                        className="
                          p-2
                          flex flex-col
                          items-center
                          justify-center
                          gap-4
                          
                        "
                      >
                        <div
                          className={cn(
                            "h-12 w-12",
                            "rounded-lg",
                            "flex items-center justify-center",
                          )}
                          style={{
                            backgroundColor: section.bg,
                          }}
                        >
                          <Icon size={30} color={section.color} />
                        </div>

                        <h3
                          className="text-lg  text-center"
                        >
                          {section.title}
                        </h3>
                      </CardContent> */}
                <CardContent
                  className={cn(
                    "px-6",
                    "flex",
                    // " flex-col",
                    "items-center",
                    "justify-between",
                    // "gap-4",
                  )}
                >
                  <div className="space-y-2">
                    <div
                      className={cn(
                        "h-8 w-8",
                        "rounded-lg",
                        "flex items-center justify-center",
                      )}
                      style={{
                        backgroundColor: section.bg,
                      }}
                    >
                      <Icon size={20} color={section.color} />
                    </div>

                    <p className="text-md text-[#8a9ab0]">{section.title}</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 2,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 28,
                        fontWeight: 300,
                        color: colors.navy,
                      }}
                    >
                      {section.value === "" ? "-" : section.value}
                    </span>
                    <span style={{ fontSize: 14, color: colors.textMuted }}>
                      {section.suffix}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

const StudentDashboard = ({ student }: Prop) => {
  const stats = transformSections(student, colors);

  return (
    // <div className="min-h-screen scroll-smooth ">
    // <section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32">
    <section className="relative overflow-hidden pt-20">
      {/* <div className="flex"> */}

      {/* SIDEBAR */}
      {/* <aside
          className="
            hidden lg:flex
            sticky top-0
            h-screen
            w-60
            border-r
            bg-[#0d1b2a]
            backdrop-blur
            flex-col
            p-5
            gap-3
          "
        >
          <h1 className="text-2xl font-bold mb-4 px-4 text-[#f5a623]">
            Dash<span style={{ color: "#e8e2d8 " }}>board</span>
          </h1>

          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={cn(
                  "rounded-xl",
                  "px-4 py-3",
                  "hover:bg-muted",
                  "text-[#8a9ab0]",
                  "transition-all",
                  "duration-200",
                  "flex items-center gap-3",
                  "text-sm font-medium)",
                  "rounded-xl",
                  "px-4 py-3",
                  "hover:bg-muted",
                  "hover:text-[#f5a623] ",
                  "transition-all",
                  "duration-200",
                  "flex items-center gap-3",
                  "text-sm font-medium",
                )}
              >
                <Icon className="h-5 w-5" />
                {section.title}
              </a>
            );
          })}
        </aside> */}

      {/* MAIN CONTENT */}
      {/* <main className="flex-1 p-4 md:p-8 space-y-10 bg-[#faf8f4]"> */}
      <main className="max-w-5xl mx-auto p-4 md:p-8 space-y-10 ">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* STUDENT INFO */}
          {/* <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="xl:col-span-2"
            >
              <Card className="rounded-3xl shadow-md border">
                <CardContent className="px-4 space-y-2">
                  <h2 className="text-3xl font-bold">Student Information</h2>

                  <div className="space-y-4">
                    <div>
                      <p className="text-muted-foreground">Name</p>
                      <p className="font-semibold">John Doe</p>
                    </div>

                    <div>
                      <p className="text-muted-foreground">Email</p>
                      <p className="font-semibold">john@gmail.com</p>
                    </div>

                    <div>
                      <p className="text-muted-foreground">Course</p>
                      <p className="font-semibold">CSE220 - Data Structures</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div> */}
          <StudentCard student={student} />

          {/* GRADE CARD */}
          {/* <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="rounded-3xl shadow-md border h-full">
                <CardContent
                  className="
                    h-full
                    flex flex-col
                    justify-center
                    items-center
                    p-2
                  "
                >
                  <p className="text-muted-foreground text-lg">Current Grade</p>

                  <h1 className="text-8xl font-black mt-4">A</h1>

                  <p className="mt-4 text-muted-foreground">GPA: 4.00</p>
                </CardContent>
              </Card>
            </motion.div> */}
          <GradeCard student={student} />
        </div>

        {/* NAVIGATION CARDS */}
        <Statcard stats={stats} />
        {/* CONTENT SECTIONS */}
        {/* <div className="space-y-10">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24"
                >
                  <Card className="rounded-3xl border shadow-sm">
                    <CardContent className="p-8 md:p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <Icon className="h-8 w-8" />

                        <h2 className="text-4xl font-bold">{section.title}</h2>
                      </div>

                      <div className="space-y-4 text-muted-foreground leading-7">
                        <p>This is the {section.title} section.</p>

                        <div
                          className="
                            rounded-2xl
                            border
                            p-6
                            mt-6
                            bg-muted/40
                            min-h-[250px]
                          "
                        >
                          Section content goes here.
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              );
            })}
          </div> */}
        <ContentSections stats={stats} />
      </main>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default StudentDashboard;
