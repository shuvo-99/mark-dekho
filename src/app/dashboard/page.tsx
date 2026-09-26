import Footer from "@/components/footer";
import StudentDashboard from "@/components/studentDashboard";
import InstructorDashboard from "@/components/InstructorDashboard";
import { getStudentData } from "@/lib/getStudentData";
import { auth } from "@/auth";
import UnAuthorized from "@/components/unAuthorized";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) return <UnAuthorized />;

  const user = session?.user;
  const student = await getStudentData(user?.email ?? "");
  

  if (!student?.email) {
    redirect("/invalid-email");
  }

  if (student.role === "faculty") {
    return (
      <main className="min-h-screen bg-[#faf8f4]">
        <Navbar />
        <InstructorDashboard roster={student.roster ?? []} />
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf8f4]">
      <Navbar />
      <StudentDashboard student={student}></StudentDashboard>
      <Footer />
    </main>
  );
}
