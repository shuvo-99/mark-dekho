import Footer from "@/components/footer";
import StudentDashboard from "@/components/studentDashboardv2";
import { getStudentData } from "@/lib/getStudentData";
import { auth, signIn, signOut } from "@/auth";
import UnAuthorized from "@/components/unAuthorized";

type Prop = {
  email: string;
};

export default async function DashboardPage({ email }: Prop) {
  const student = await getStudentData(email);
  // console.log("std --", student);

  const session = await auth();

  if (!session) return <UnAuthorized />;

  return (
    <main className="min-h-screen">
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/sign-in" });
        }}
      >
        <button
          type="submit"
          className="p-2 border-2 bg-amber-400 cursor-pointer"
        >
          Sign Out
        </button>
      </form>
      {/* <StudentDashboard></StudentDashboard> */}
      <StudentDashboard></StudentDashboard>
      <Footer />
    </main>
  );
}
