import { redirect } from "next/navigation";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getStudentData } from "@/lib/getStudentData";

type Prop = {
  // email?: string | null | undefined;
  email: string;
};

export default async function DashboardPage({ email }: Prop) {
  // const session = await getServerSession(authOptions);

  // if (!session?.user?.email) {
  //   redirect("/login");
  // }

  const student = await getStudentData(email);
  console.log("std --", student);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Student Dashboard</h1>

      <div className="border p-5 rounded space-y-2 max-w-md">
        <p>
          <strong>Name:</strong> {student.name}
        </p>
        <p>
          <strong>Email:</strong> {student.email}
        </p>
        <p>
          <strong>Q1:</strong> {student.quiz1}
        </p>
        {/* <p>
          <strong>Physics:</strong> {student.physics}
        </p>
        <p>
          <strong>GPA:</strong> {student.gpa}
        </p> */}
      </div>
    </div>
  );
}
