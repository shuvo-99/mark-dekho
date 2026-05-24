import { auth, signIn, signOut } from "@/auth";
import DashboardPage from "../dashboard/page";

type User = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};

type Props = {
  user: User;
};

export default async function SignOut({ user }: Props) {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit" className="p-2 border-2 bg-amber-400">
          Sign Out
        </button>
      </form>
      <DashboardPage email={user.email ?? ""}></DashboardPage>
    </>
  );
}
