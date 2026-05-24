"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  CalendarDays,
  FileText,
  ClipboardList,
  Users,
  MessageCircle,
  BookOpen,
  BarChart2,
  Settings,
  ChevronRight,
} from "lucide-react";

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

// ─── Data ─────────────────────────────────────────────────────────────────────
const navItems = [
  { id: "overview", label: "Overview", Icon: LayoutDashboard },
  { id: "schedule", label: "Schedule", Icon: CalendarDays },
  { id: "assignments", label: "Assignments", Icon: FileText },
  { id: "grades", label: "Grades", Icon: ClipboardList },
  { id: "attendance", label: "Attendance", Icon: Users },
  { id: "discussions", label: "Discussions", Icon: MessageCircle },
  { id: "resources", label: "Resources", Icon: BookOpen },
  { id: "settings", label: "Settings", Icon: Settings },
];

const sectionCards = [
  {
    id: "schedule",
    label: "Schedule",
    Icon: CalendarDays,
    color: colors.amber,
    bg: "rgba(245,166,35,0.10)",
  },
  {
    id: "assignments",
    label: "Assignments",
    Icon: FileText,
    color: colors.green,
    bg: "rgba(45,212,160,0.10)",
  },
  {
    id: "grades",
    label: "Grades",
    Icon: ClipboardList,
    color: colors.purple,
    bg: "rgba(123,135,245,0.10)",
  },
  {
    id: "attendance",
    label: "Attendance",
    Icon: Users,
    color: colors.coral,
    bg: "rgba(255,107,91,0.10)",
  },
  {
    id: "discussions",
    label: "Discussions",
    Icon: MessageCircle,
    color: colors.amber,
    bg: "rgba(245,166,35,0.10)",
  },
  {
    id: "resources",
    label: "Resources",
    Icon: BookOpen,
    color: colors.green,
    bg: "rgba(45,212,160,0.10)",
  },
  {
    id: "analytics",
    label: "Analytics",
    Icon: BarChart2,
    color: colors.purple,
    bg: "rgba(123,135,245,0.10)",
  },
  {
    id: "settings",
    label: "Settings",
    Icon: Settings,
    color: colors.coral,
    bg: "rgba(255,107,91,0.10)",
  },
];

const contentSections = [
  {
    id: "schedule",
    label: "Schedule",
    Icon: CalendarDays,
    color: colors.amber,
    bg: "rgba(245,166,35,0.10)",
    tag: "2 sessions this week",
    tagStyle: { background: "rgba(245,166,35,0.12)", color: "#a0700a" },
  },
  {
    id: "assignments",
    label: "Assignments",
    Icon: FileText,
    color: colors.green,
    bg: "rgba(45,212,160,0.10)",
    tag: "1 due soon",
    tagStyle: { background: "rgba(255,107,91,0.12)", color: "#c0392b" },
  },
  {
    id: "grades",
    label: "Grades",
    Icon: ClipboardList,
    color: colors.purple,
    bg: "rgba(123,135,245,0.10)",
    tag: "All caught up",
    tagStyle: { background: "rgba(45,212,160,0.12)", color: "#1a7a5c" },
  },
];

const stats = [
  { label: "Quiz Avg", value: "92", suffix: "%", dot: colors.amber },
  { label: "Assignments", value: "8", suffix: "/9", dot: colors.green },
  { label: "Attendance", value: "96", suffix: "%", dot: colors.purple },
  { label: "Upcoming", value: "2", suffix: "", dot: colors.coral },
];

// ─── Font injection (runs once) ───────────────────────────────────────────────
if (!document.getElementById("dm-fonts")) {
  const link = document.createElement("link");
  link.id = "dm-fonts";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap";
  document.head.appendChild(link);
}

// ─── Tiny style helpers ────────────────────────────────────────────────────────
const serif = { fontFamily: "'DM Serif Display', serif" };
const sans = { fontFamily: "'DM Sans', sans-serif" };

// ─── Sub-components ───────────────────────────────────────────────────────────

function Sidebar({ active, onSelect }) {
  return (
    <aside
      style={{
        width: 220,
        flexShrink: 0,
        background: colors.navy,
        borderRight: `1px solid ${colors.borderLight}`,
        padding: "28px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        height: "100%",
        ...sans,
      }}
    >
      <div
        style={{
          ...serif,
          fontSize: 20,
          color: colors.amber,
          marginBottom: 28,
          padding: "0 8px",
          letterSpacing: "-0.3px",
        }}
      >
        Dash<span style={{ color: colors.textOnDark }}>board</span>
      </div>

      {navItems.map(({ id, label, Icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => onSelect(id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 12px",
              borderRadius: 10,
              fontSize: 13.5,
              fontWeight: isActive ? 500 : 400,
              color: isActive ? colors.amber : colors.textMuted,
              background: isActive ? colors.navyMid : "transparent",
              border: isActive
                ? `1px solid rgba(245,166,35,0.2)`
                : "1px solid transparent",
              cursor: "pointer",
              textAlign: "left",
              width: "100%",
              transition: "all 0.15s",
              ...sans,
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = colors.navyMid;
                e.currentTarget.style.color = colors.textOnDark;
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = colors.textMuted;
              }
            }}
          >
            <Icon size={16} />
            {label}
          </button>
        );
      })}
    </aside>
  );
}

function Avatar({ initials }) {
  return (
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: colors.amber,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...serif,
        fontSize: 20,
        color: colors.navy,
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}

function Tag({ children, style }) {
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

function ProgressBar({ value, max = 100 }) {
  return (
    <div
      style={{
        background: "rgba(13,27,42,0.07)",
        borderRadius: 4,
        height: 4,
        overflow: "hidden",
        marginTop: 8,
      }}
    >
      <div
        style={{
          height: "100%",
          borderRadius: 4,
          background: colors.amber,
          width: `${(value / max) * 100}%`,
          transition: "width 0.6s ease",
        }}
      />
    </div>
  );
}

function StudentCard() {
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
      <Avatar initials="JD" />
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
          John Doe
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 16,
          }}
        >
          {[
            { label: "Email", value: "john@gmail.com" },
            { label: "Student ID", value: "2024-CS-081" },
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
              CSE220 — Data Structures
            </Tag>
          </div>
        </div>

        <div style={{ marginTop: 16, display: "flex", gap: 24 }}>
          <div>
            <div
              style={{
                fontSize: 11,
                color: colors.textMuted,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: 4,
                fontWeight: 500,
              }}
            >
              Progress
            </div>
            <div style={{ width: 200 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 12,
                  color: colors.navy,
                  fontWeight: 500,
                  marginBottom: 4,
                }}
              >
                <span>Week 9 of 16</span>
                <span>56%</span>
              </div>
              <ProgressBar value={56} />
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: 11,
                color: colors.textMuted,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: 4,
                fontWeight: 500,
              }}
            >
              Status
            </div>
            <Tag
              style={{ background: "rgba(45,212,160,0.12)", color: "#1a7a5c" }}
            >
              ● Enrolled
            </Tag>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function GradeCard() {
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
          fontSize: 11,
          color: colors.textOnDark,
          textTransform: "uppercase",
          letterSpacing: "0.6px",
        }}
      >
        Excellent
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
      </div>
    </motion.div>
  );
}

function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      style={{
        background: "#fff",
        borderRadius: 16,
        border: `1px solid ${colors.borderCream}`,
        padding: "16px 20px",
      }}
    >
      <div
        style={{
          fontSize: 11,
          color: colors.textMuted,
          textTransform: "uppercase",
          letterSpacing: "0.6px",
          marginBottom: 12,
          fontWeight: 500,
        }}
      >
        Performance Overview
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        {stats.map(({ label, value, suffix, dot }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.05 }}
            style={{
              flex: 1,
              background: "#faf8f4",
              borderRadius: 10,
              padding: "14px 12px",
              border: `1px solid ${colors.borderCream}`,
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: dot,
                marginBottom: 8,
              }}
            />
            <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
              <span
                style={{ fontSize: 22, fontWeight: 600, color: colors.navy }}
              >
                {value}
              </span>
              <span style={{ fontSize: 14, color: colors.textMuted }}>
                {suffix}
              </span>
            </div>
            <div
              style={{
                fontSize: 11,
                color: colors.textMuted,
                marginTop: 2,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              {label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function SectionGrid() {
  return (
    <div>
      <h2
        style={{
          ...serif,
          fontSize: 22,
          color: colors.navy,
          letterSpacing: "-0.3px",
          marginBottom: 14,
        }}
      >
        Course Sections
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 12,
        }}
      >
        {sectionCards.map(({ id, label, Icon, color, bg }, i) => (
          <motion.a
            key={id}
            href={`#${id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: 14,
                border: `1px solid ${colors.borderCream}`,
                padding: "20px 14px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
                textAlign: "center",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,166,35,0.5)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(245,166,35,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.borderCream;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color,
                }}
              >
                <Icon size={20} />
              </div>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: colors.navy,
                  ...sans,
                }}
              >
                {label}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

function ContentSections() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {contentSections.map(
        ({ id, label, Icon, color, bg, tag, tagStyle }, i) => (
          <motion.section
            key={id}
            id={id}
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
                    background: bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color,
                  }}
                >
                  <Icon size={18} />
                </div>
                <h3
                  style={{
                    ...serif,
                    fontSize: 18,
                    color: colors.navy,
                    letterSpacing: "-0.2px",
                  }}
                >
                  {label}
                </h3>
                <Tag style={{ marginLeft: "auto", ...tagStyle }}>{tag}</Tag>
              </div>
              <div style={{ padding: "20px 24px" }}>
                <div
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
                  {label} content goes here
                </div>
              </div>
            </div>
          </motion.section>
        ),
      )}
    </div>
  );
}

// ─── Root Component ────────────────────────────────────────────────────────────
export default function StudentDashboard() {
  const [activeNav, setActiveNav] = useState("overview");

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: colors.navy,
        ...sans,
      }}
    >
      {/* Sidebar — hidden on mobile, shown on lg+ */}
      <div
        className="hidden lg:block"
        style={{ position: "sticky", top: 0, height: "100vh" }}
      >
        <Sidebar active={activeNav} onSelect={setActiveNav} />
      </div>

      {/* Main */}
      <main
        style={{
          flex: 1,
          background: "#faf8f4",
          padding: "32px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          overflowY: "auto",
        }}
      >
        {/* Top row: student + grade */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 160px",
            gap: 16,
          }}
        >
          <StudentCard />
          <GradeCard />
        </div>

        {/* Stats bar */}
        <StatsBar />

        {/* Section nav grid */}
        <SectionGrid />

        {/* Content sections */}
        <ContentSections />
      </main>
    </div>
  );
}
