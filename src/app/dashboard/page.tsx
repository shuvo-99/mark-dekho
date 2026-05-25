import Footer from "@/components/footer";
import StudentDashboard from "@/components/studentDashboard";
import { getStudentData } from "@/lib/getStudentData";
import { auth, signIn, signOut } from "@/auth";
import UnAuthorized from "@/components/unAuthorized";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";

type Prop = {
  email: string;
};

export default async function DashboardPage({ email }: Prop) {
  const session = await auth();

  if (!session) return <UnAuthorized />;

  const user = session?.user;
  const student = await getStudentData(user?.email ?? "");

  if (!student?.email) {
    redirect("/invalid-email");
  }
  // console.log("std - ", student);
  // console.log("newData - ", newData);

  return (
    <main className="min-h-screen bg-[#faf8f4]">
      <Navbar />
      <StudentDashboard student={student}></StudentDashboard>
      <Footer />
    </main>
  );
}
