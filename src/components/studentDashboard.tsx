"use client";

import { Card, CardContent } from "@/components/ui/card";
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
} from "lucide-react";

type Props = {
  studentData: any;
};

// export default function StudentDashboard({ studentData }: Props) {
const StudentDashboard = () => {
  const sections = [
    {
      id: "attendance",
      title: "Attendance",
      icon: UserCheck,
    },
    {
      id: "assignments",
      title: "Assignments",
      icon: ClipboardList,
    },
    {
      id: "quiz",
      title: "Quiz",
      icon: PenBox,
    },
    {
      id: "midterm",
      title: "Midterm",
      icon: FileText,
    },
    {
      id: "final",
      title: "Final",
      icon: GraduationCap,
    },
    {
      id: "projects",
      title: "Projects",
      icon: FolderKanban,
    },
    {
      id: "evaluation",
      title: "Evaluation",
      icon: BookOpen,
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

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <div className="flex">
        {/* SIDEBAR */}
        <aside
          className="
            hidden lg:flex
            sticky top-0
            h-screen
            w-64
            border-r
            bg-background/80
            backdrop-blur
            flex-col
            p-5
            gap-3
          "
        >
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="
                  rounded-xl
                  px-4 py-3
                  hover:bg-muted
                  transition-all
                  duration-200
                  flex items-center gap-3
                  text-sm font-medium
                "
              >
                <Icon className="h-5 w-5" />
                {section.title}
              </a>
            );
          })}
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-4 md:p-8 space-y-10">
          {/* TOP SECTION */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* STUDENT INFO */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="xl:col-span-2"
            >
              <Card className="rounded-3xl shadow-md border">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">
                    Student Information
                  </h2>

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
            </motion.div>

            {/* GRADE CARD */}
            <motion.div
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
                    p-8
                  "
                >
                  <p className="text-muted-foreground text-lg">Current Grade</p>

                  <h1 className="text-8xl font-black mt-4">A</h1>

                  <p className="mt-4 text-muted-foreground">GPA: 4.00</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* NAVIGATION CARDS */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Course Sections</h2>

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
              {sections.map((section, index) => {
                const Icon = section.icon;

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
                      className="
                        rounded-3xl
                        border
                        shadow-sm
                        hover:shadow-xl
                        transition-all
                        duration-300
                        cursor-pointer
                        h-full
                      "
                    >
                      <CardContent
                        className="
                          p-6
                          flex flex-col
                          items-center
                          justify-center
                          gap-4
                          min-h-[180px]
                        "
                      >
                        <Icon className="h-10 w-10" />

                        <h3 className="text-xl font-semibold text-center">
                          {section.title}
                        </h3>
                      </CardContent>
                    </Card>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* CONTENT SECTIONS */}
          <div className="space-y-10">
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
